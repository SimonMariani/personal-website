import os
from openai import OpenAI

# OpenAI client, shared by the embedding and chat actions.
client = OpenAI(api_key=os.environ["OPENAIKEY"], timeout=30.0)
