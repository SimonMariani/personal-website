import os

#############
### SETUP ###
#############

# The app modules read credentials from the environment at import time, so set
# harmless dummy values before any test imports them.
os.environ.setdefault("OPENAIKEY", "test-key")
os.environ.setdefault("POSTGRES_USER", "test")
os.environ.setdefault("POSTGRES_PASSWORD", "test")
os.environ.setdefault("POSTGRES_DB", "test")

# Replace the real connection pool with a no-op so importing the app never tries
# to reach a live Postgres. Tests that need the DB patch the pool themselves.
import psycopg_pool


class _DummyPool:
    def __init__(self, *args, **kwargs):
        pass


psycopg_pool.ConnectionPool = _DummyPool
