from typing import Dict, Any
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from vector_db.operations import retrieve_from_query
from vector_db.connections import openai_client, model

# App setup
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # Local origins for development, essentially only allow the frontend
        "http://localhost:3000",
        # Production origins
        "http://simonmariani.com",
        "http://www.simonmariani.com",
        "https://simonmariani.com",
        "https://www.simonmariani.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],  # allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # allow all headers
)


# Test route
@app.get("/ping/")
def test():
    return {"value": "pong"}


# The route to chat with the chatbot
@app.post("/talk/")
def talk(item: Dict[str, Any]):
    """
    Route to chat with the chatbot, input should containe the message and the previous messages.
    """

    # Extract the message and the previous messages
    message = item["message"]["text"]
    previous_messages = item["previousMessages"]

    # Extract the relvant conents
    search_results = retrieve_from_query(message, collection_name="documents", limit=15)

    # Create the context strings
    files_context = "\n".join(f"document: {item['entity']['filename']} - snippet: {item['entity']['text']}" for item in search_results)
    messages_context = "\n".join(f"message by {item['sender']}: {item['text']}" for item in previous_messages[-10:])  # Use only the last 10 messages

    # The system prompt is the general instructions for the chatbot
    SYSTEM_PROMPT = """
    You are an AI assistant on the personal website of Simon Mariani.  
    Answer questions about Simon Mariani using information from documents such as his work, resume, and personal projects.  

    Your responses should be:
    - Short and conversational, like a chat.
    - Natural and coherent using previous messages.
    - Professional and positive about Simon Mariani, but not forced.
    - Based only on the provided context. Do not make up information.
    - Paraphrase or summarize the context instead of quoting it verbatim whenever possible.
    - If you do not know the answer, say "I don't know" or "I don't have the information to answer that question."
    """

    # The user prompt contains the context, the question and the previous messages
    USER_PROMPT = f"""
    Use the following information enclosed in <context> tags to answer the question in <question>.  
    Use the previous conversation messages in <messages> to make your answer flow naturally.  

    <messages>
    {messages_context}
    </messages>

    <context>
    {files_context}
    </context>

    <question>
    {message}
    </question>

    Instructions for your response:
    - Keep it short and friendly, like a chat message.
    - Paraphrase the information from the context instead of quoting it directly.
    - Only use information from the context; do not guess.
    - Be positive and professional.
    """

    # Get the response from opanai
    response = openai_client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": USER_PROMPT},
        ],
    )
    response_message = response.choices[0].message.content

    # Return only the response message
    return {"response": response_message}
