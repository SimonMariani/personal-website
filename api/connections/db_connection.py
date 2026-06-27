import os
from psycopg_pool import ConnectionPool
from pgvector.psycopg import register_vector

#####################
### CONFIGURATION ###
#####################

# Connection string for Postgres; credentials come from the environment.
CONNINFO = (
    f"host={os.environ.get('PG_HOST', 'postgres')} "
    f"port={os.environ.get('PG_PORT', '5432')} "
    f"user={os.environ['POSTGRES_USER']} "
    f"password={os.environ['POSTGRES_PASSWORD']} "
    f"dbname={os.environ['POSTGRES_DB']}"
)


##################
### CONNECTION ###
##################


def _setup_connection(conn):
    """
    Enable pgvector and register the vector type on each new connection.
    """
    # The extension must exist before the vector type can be registered.
    conn.execute("CREATE EXTENSION IF NOT EXISTS vector")
    conn.commit()
    register_vector(conn)


# A thread-safe pool of connections for the (concurrent) FastAPI app.
pool = ConnectionPool(CONNINFO, configure=_setup_connection, open=True)
