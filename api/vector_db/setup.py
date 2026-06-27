from .connections import openai_client, embedding_model
from .utility import emb_text

# Obtain the embedding dimension once at startup; used as the size of the
# `vector` column when a collection (table) is created.
embedding_dim = len(emb_text("text to get the embedding dimension", openai_client, embedding_model))
