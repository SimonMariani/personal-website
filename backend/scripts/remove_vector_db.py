"""
This script calls the remove_vector_db function to remove the documents collection from the vector db.
It is intended to be run as a standalone script.
"""

from vector_db.operations import remove_collection_from_vector_db

if __name__ == "__main__":
    remove_collection_from_vector_db("documents")
