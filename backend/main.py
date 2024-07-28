from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, Any
from db import milvus_client, openai_client, splitter, emb_text, schema, index_params, embedding_dim

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
@app.get("/")
def test():
    return {"Hello": "World"} 


@app.post("/talk")
def talk(item: Dict[str, Any]):

    message = item['message']['text']
    previous_messages = "\n".join([previous_message['text'] for previous_message in item['previousMessages']])

    print(previous_messages)

    texts = retrieve_relevant_documents(message, use_splitted=True, limit=5)
    context = "\n".join(texts)

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


def retrieve_relevant_documents(query, use_splitted=True, limit=100, truncate_text=None):

    collection = "documents_splitted" if use_splitted else "documents" 

    texts = []
    if milvus_client.has_collection(collection) and query is not None:

        search_res = milvus_client.search(
            collection_name=collection,
            data=[
                emb_text(query)
            ],
            limit=limit,
            search_params={"metric_type": "IP", "params": {}},  # Inner product distance
            output_fields=["text", "id", "filename"],  # Return the text field
        )

        texts = [res["entity"]["text"][:truncate_text] for res in search_res[0]]

    return texts