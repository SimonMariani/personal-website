# Personal Website - Simon Mariani

Personal portfolio website for Simon Mariani. It showcases his skills through interactive charts, lists his work experience and education, and provides contact information and a downloadable CV. It also includes an AI-powered chatbot that can answer questions about Simon using his documents (CV, thesis, transcripts, recommendation letters) as context.

**Live:** [simonmariani.com](https://simonmariani.com) | **API:** [api.simonmariani.com](https://api.simonmariani.com)

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript + Vite + Ant Design |
| Backend | FastAPI + Python 3.12 |
| AI | OpenAI gpt-4o-mini + text-embedding-3-small |
| Database | PostgreSQL 17 + pgvector |

## Quickstart

Copy `.env.example` to `.env` and fill in your OpenAI key, then:

```bash
make start             # dev (hot-reload, ports 3000 + 8000)
make start-prod        # production build
make stop              # stop dev containers
make stop-prod         # stop prod containers
make start-prod-local  # test production build locally
```

## API

The chatbot uses RAG: documents are chunked (1000 chars / 50-char overlap), embedded with `text-embedding-3-small`, and stored in pgvector. On each request it retrieves the top 15 most similar chunks and passes them as context to `gpt-4o-mini` along with the last 10 messages.

**API endpoints:**

| Method | Path | Description |
|---|---|---|
| `GET` | `/ping/` | Health check |
| `POST` | `/talk/` | Chat - body: `{ message: str, previousMessages: list }` |

### Syncing documents

Drop any PDF, Word (`.docx`), or PowerPoint (`.pptx`) files into `api/documents/` and run:

```bash
make sync-db                           # index all documents
make sync-db ARGS="--overwrite"        # reindex from scratch
make search-db ARGS="'query'"          # test similarity search
make answer-db ARGS="'question'"       # test a full RAG answer
```

The `api/documents/information.md` file contains personal metadata used as additional context.

## Frontend

### Configuration

- `frontend/src/config/experience.ts` - skills data for the charts; add, remove, or adjust entries here
- `frontend/src/config/contact.ts` - contact links (email, LinkedIn, GitHub, location)
- `frontend/src/config/config.ts` - API URL (dev: `localhost:8000`, prod: `api.simonmariani.com`)

### Running without Docker

```bash
cd frontend
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + production build
npm run lint
```

For mobile testing: run `ipconfig`, grab your IPv4 address, and open `http://192.168.x.x:3000` on your phone.

## API - Running without Docker

```bash
cd api
pip install -r requirements.txt
fastapi dev main.py --host 0.0.0.0 --port 8000
```

## Remote management

GitHub Actions updates the server on push. For manual document updates:

```bash
make update-documents-remote                                          # push all documents
make sync-db-remote ARGS="--overwrite --file Simon_Mariani_CV.pdf"   # reindex one file
```

## Notes

- Vector storage uses HNSW indexes with cosine distance. Each document collection is its own table.
- Contact form uses [Formspree](https://formspree.io).
- OpenAI keys: [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
