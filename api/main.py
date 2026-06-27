import json
from typing import Dict, Any
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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
### ROUTES ###
##############


@app.get("/ping/")
async def test():
    """
    Health-check route used by the container healthcheck.
    """
    return {"value": "pong"}


@app.post("/talk/")
async def talk(item: Dict[str, Any]):
    """
    Route to chat with the chatbot, input should contain the message and the previous messages.
    """
    # If the request has an "item" key, extract it. NOTE: this is necessary for
    # compatibility with multipart/form-data requests from robotalp.
    if "item" in item:
        item = json.loads(item["item"])

    # Extract the message and previous messages, then generate the reply.
    message = item["message"]["text"]
    previous_messages = item["previousMessages"]
    return {"response": answer(message, previous_messages)}
