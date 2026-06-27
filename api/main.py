import json
from typing import Dict, Any, List
from fastapi import FastAPI, HTTPException
from fastapi.concurrency import run_in_threadpool
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ValidationError
from actions.answer import answer
from config import CORS_ORIGINS

#############
### SETUP ###
#############

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],  # allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # allow all headers
)


##############
### MODELS ###
##############


class Message(BaseModel):
    """A single chat message. Extra fields (e.g. timestamp) are ignored."""

    text: str
    sender: str = "user"


class AnswerRequest(BaseModel):
    """The expected body for the /answer/ route."""

    message: Message
    previousMessages: List[Message] = []


##############
### ROUTES ###
##############


@app.get("/ping/")
async def ping():
    """
    Health-check route used by the container healthcheck.
    """
    return {"value": "pong"}


@app.post("/answer/")
async def answer_route(payload: Dict[str, Any]):
    """
    Route to chat with the chatbot, input should contain the message and the previous messages.
    """
    # If the request has an "item" key, extract it. NOTE: this is necessary for
    # compatibility with multipart/form-data requests from robotalp.
    if "item" in payload:
        payload = json.loads(payload["item"])

    # Validate the request shape, returning a 422 instead of a 500 on bad input.
    try:
        request = AnswerRequest(**payload)
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=e.errors())

    # answer() does blocking I/O (OpenAI + DB), so run it in a threadpool to
    # avoid blocking the event loop while keeping this route async.
    previous_messages = [msg.model_dump() for msg in request.previousMessages]
    response = await run_in_threadpool(answer, request.message.text, previous_messages)
    return {"response": response}
