import os
from dotenv import load_dotenv
from pymilvus import MilvusClient
from openai import OpenAI


# Load environment variables
load_dotenv()

# Load the environment variables
db_url = os.environ["DB_URL"]
db_token = os.environ["DB_TOKEN"]

# Connect to clients and instatiate the splitter and embedding function
milvus_client = MilvusClient(uri=db_url, token=db_token)
openai_client = OpenAI(api_key=os.environ["OPENAIKEY"])

# Model settings
embedding_model = "text-embedding-3-small"
model = "gpt-4o-mini"
