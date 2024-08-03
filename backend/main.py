from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, Any
from db import retrieve_relevant_content, openai_client

# App setup
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:80", "http://localhost", "http://localhost:8000"], # here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Test route
@app.get("/api/")
def test():
    return {"Hello": "World"} 


@app.post("/api/talk/")
def talk(item: Dict[str, Any]):
    """
    Route to chat with the chatbot, input should containe the message and the previous messages.
    """

    # Extract the message and the previous messages
    message = item['message']['text']
    previous_messages = "\n".join([previous_message['text'] for previous_message in item['previousMessages']])

    # Extract the relvant conents
    texts = retrieve_relevant_content(message, use_splitted=True, limit=5)
    context = "\n".join(texts)

    # Create the system and user prompts
    SYSTEM_PROMPT = \
    """
    Human: You are an AI assistant. You are able to find answers to the questions from the contextual passage snippets provided and the previous messsages of the conversation.
    """

    USER_PROMPT = \
    f"""
    Use the following pieces of information enclosed in <context> tags to provide an answer to the question enclosed in <question> tags.
    Take the previous messages into account enclosed in the <messages> tags.
    <messages>
    {previous_messages}
    <messages>
    <context>
    {context}
    </context>
    <question>
    {message}
    </question>
    """

    # Get the response from the chatbot and re
    response = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        # model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": USER_PROMPT},
        ],
    )
    response_message = response.choices[0].message.content

    return {'response': response_message}


