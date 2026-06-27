from connections.model_connection import client
from actions.search import search
from config import CHAT_MODEL, SEARCH_LIMIT, CHAT_HISTORY_LIMIT

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


def answer(message, previous_messages):
    """
    Generate a chat reply to `message`, grounded in the most relevant stored documents
    and the recent conversation history.
    """
    # Retrieve the document chunks most relevant to the message.
    search_results = search(message, limit=SEARCH_LIMIT)

    # Build the context strings from the retrieved documents and the recent messages.
    files_context = "\n".join(f"document: {result['filename']} - snippet: {result['text']}" for result in search_results)
    messages_context = "\n".join(f"message by {msg['sender']}: {msg['text']}" for msg in previous_messages[-CHAT_HISTORY_LIMIT:])

    # The user prompt carries the retrieved context, the recent messages and the question.
    user_prompt = f"""
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

    # Ask the LLM and return just the reply text.
    response = client.chat.completions.create(
        model=CHAT_MODEL,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt},
        ],
    )
    return response.choices[0].message.content
