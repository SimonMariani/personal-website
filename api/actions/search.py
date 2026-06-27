from psycopg import sql
from pgvector.psycopg import Vector
from connections.db_connection import pool
from connections.model_connection import client
from config import EMBEDDING_MODEL, SEARCH_COLLECTION, SEARCH_LIMIT


def search(query, collection=SEARCH_COLLECTION, limit=SEARCH_LIMIT):
    """
    Return the stored chunks most similar to `query`, as a list of dicts.
    """
    # Embed the query so it can be compared against the stored embeddings.
    query_vector = client.embeddings.create(input=[query], model=EMBEDDING_MODEL).data[0].embedding

    with pool.connection() as conn:
        # If the collection was never created there is nothing to search.
        if conn.execute("SELECT to_regclass(%s)", (collection,)).fetchone()[0] is None:
            return []

        # Order by cosine distance (<=>) so the closest chunks come first.
        rows = conn.execute(
            sql.SQL("SELECT filename, file_path, page, text FROM {} ORDER BY vector <=> %s LIMIT %s").format(sql.Identifier(collection)),
            (Vector(query_vector), limit),
        ).fetchall()

    return [{"filename": r[0], "file_path": r[1], "page": r[2], "text": r[3]} for r in rows]
