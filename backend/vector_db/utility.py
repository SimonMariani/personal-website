
def emb_text(text, openai_client, embedding_model):
    """
    Embedding function that returns an embedding for a given text.
    """

    return (
        openai_client.embeddings.create(input=text, model=embedding_model)
        .data[0]
        .embedding
    )

