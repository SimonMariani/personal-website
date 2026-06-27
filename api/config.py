#####################
### MODEL SETTINGS ###
#####################

EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIM = 1536  # output size of text-embedding-3-small
CHAT_MODEL = "gpt-4o-mini"

######################
### CHUNK SETTINGS ###
######################

CHUNK_SIZE = 1000
CHUNK_OVERLAP = 50

######################
### SEARCH SETTINGS ###
######################

SEARCH_COLLECTION = "documents"
SEARCH_LIMIT = 15
CHAT_HISTORY_LIMIT = 10

####################
### CORS ORIGINS ###
####################

CORS_ORIGINS = [
    # Local origins for development
    "http://localhost:3000",
    # Production origins
    "http://simonmariani.com",
    "http://www.simonmariani.com",
    "https://simonmariani.com",
    "https://www.simonmariani.com",
]
