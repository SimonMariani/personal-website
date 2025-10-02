"""
This script calls the update_vector_db function to update the vector database from the documents directory and the documents collection.
It is intended to be run as a standalone script.
"""

import argparse
from vector_db.operations import update_vector_db

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Update the vector database from the documents directory and collection.")
    parser.add_argument("--overwrite", action="store_true", help="If set, overwrite the existing collection.")

    args = parser.parse_args()
    update_vector_db("documents", "documents", overwrite=args.overwrite)
