import os
from dotenv import load_dotenv
from psycopg_pool import ConnectionPool
from pgvector.psycopg import register_vector
from openai import OpenAI

# Load environment variables
load_dotenv()

# Build the Postgres connection string from the environment variables. The
# POSTGRES_* names are shared with the postgres container (via env_file), so the
# credentials live in a single place. Host/port default to the compose service.
conninfo = (
    f"host={os.environ.get('PG_HOST', 'postgres')} "
    f"port={os.environ.get('PG_PORT', '5432')} "
    f"user={os.environ['POSTGRES_USER']} "
    f"password={os.environ['POSTGRES_PASSWORD']} "
    f"dbname={os.environ['POSTGRES_DB']}"
)


def _configure(conn):
    """
    Configure every new pooled connection: make sure the pgvector extension
    exists and register the vector type so Python lists adapt to/from `vector`.
    """
    conn.execute("CREATE EXTENSION IF NOT EXISTS vector")
    conn.commit()
    register_vector(conn)


# Connect to clients. The pool gives us thread-safe connections for FastAPI.
pg_pool = ConnectionPool(conninfo, configure=_configure, open=True)
openai_client = OpenAI(api_key=os.environ["OPENAIKEY"])

# Model settings
embedding_model = "text-embedding-3-small"
model = "gpt-4o-mini"
