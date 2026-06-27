import argparse
from actions.search import search
from actions.sync_folder import sync_directory
from actions.answer import answer
from config import SEARCH_COLLECTION, SEARCH_LIMIT


def main():
    """
    Parse the command-line arguments and run the requested action.
    """
    parser = argparse.ArgumentParser(description="Run the API actions from the command line.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    # sync: index a folder of documents into a collection.
    sync_parser = subparsers.add_parser("sync", help="Sync a folder of documents into a collection.")
    sync_parser.add_argument("--collection", default=SEARCH_COLLECTION, help="Target collection name.")
    sync_parser.add_argument("--directory", default="documents", help="Directory of source documents.")
    sync_parser.add_argument("--overwrite", action="store_true", help="Re-index files that are already stored.")
    sync_parser.add_argument("--file", help="Only sync this single filename.")

    # search: print the chunks most similar to a query.
    search_parser = subparsers.add_parser("search", help="Search a collection for chunks similar to a query.")
    search_parser.add_argument("query", help="The query to search for.")
    search_parser.add_argument("--collection", default=SEARCH_COLLECTION, help="Collection to search.")
    search_parser.add_argument("--limit", type=int, default=SEARCH_LIMIT, help="Maximum number of results.")

    # answer: print a chat reply grounded in the stored documents.
    answer_parser = subparsers.add_parser("answer", help="Ask the chatbot a question.")
    answer_parser.add_argument("message", help="The message to send to the chatbot.")

    args = parser.parse_args()

    # Dispatch to the chosen action.
    if args.command == "sync":
        sync_directory(args.directory, collection=args.collection, overwrite=args.overwrite, only_file=args.file)
    elif args.command == "search":
        for result in search(args.query, collection=args.collection, limit=args.limit):
            print(f"{result['filename']} (page {result['page']}): {result['text'][:100]}")
    elif args.command == "answer":
        print(answer(args.message, []))


if __name__ == "__main__":
    main()
