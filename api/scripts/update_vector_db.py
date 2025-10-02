"""
This script calls the update_vector_db function to update the vector database from the documents directory and the documents collection.
It is intended to be run as a standalone script.
"""

from vector_db.operations import update_vector_db

if __name__ == "__main__":
    update_vector_db("documents", "documents", overwrite=True)
