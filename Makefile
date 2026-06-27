# Use Git Bash on Windows so the recipes run with a POSIX shell.
ifeq ($(OS),Windows_NT)
SHELL := C:/Program Files/Git/bin/bash.exe
else
SHELL := /bin/bash
endif

REMOTE = root@142.93.104.164
REMOTE_DIR = /home/applications/personal-website

############################
### CONTAINER MANAGEMENT ###
############################

# The general make command just runs the start command
all: start

# Start commands
start:
	docker compose -f docker-compose-dev.yaml up --build --watch --remove-orphans

start-prod:
	docker compose -f docker-compose-prod.yaml up --build -d --remove-orphans

start-prod-local:
	docker network create vm-load-balancer || true
	docker compose -f docker-compose-prod.yaml up --build -d --remove-orphans

# Stop the containers
stop:
	docker compose -f docker-compose-dev.yaml down

stop-prod:
	docker compose -f docker-compose-prod.yaml down

# Build the frontend, this should be done before pushing and deploying
build-frontend:
	docker exec personal-website-frontend npm run build

# Useful commands
logs-api:
	docker logs -f personal-website-api

logs-frontend:
	docker logs -f personal-website-frontend

exec-api:
	docker exec -it personal-website-api sh

exec-frontend:
	docker exec -it personal-website-frontend sh

######################
### DATABASE LOCAL ###
######################

# Sync the vector db with the api/documents folder. E.g., make sync-db ARGS="--overwrite --file Simon_Mariani_CV.pdf"
sync-db:
	docker exec personal-website-api python -m scripts.manage_vector_db sync $(ARGS)

# Search the vector db. E.g., make search-db ARGS="'where did Simon study'"
search-db:
	docker exec personal-website-api python -m scripts.manage_vector_db search $(ARGS)

# Ask the chatbot. E.g., make answer-db ARGS="'what is the thesis about'"
answer-db:
	docker exec personal-website-api python -m scripts.manage_vector_db answer $(ARGS)

#######################
### DATABASE REMOTE ###
#######################

# Replace the remote documents with the local ones and re-sync the remote db.
update-documents-remote: remove-documents-remote upload-documents-remote sync-db-remote

remove-documents-remote:
	ssh $(REMOTE) "rm -rf $(REMOTE_DIR)/api/documents/{*,.*} 2>/dev/null"

upload-documents-remote:
	scp -r ./api/documents/* $(REMOTE):$(REMOTE_DIR)/api/documents

sync-db-remote:
	ssh $(REMOTE) "cd $(REMOTE_DIR) && make sync-db ARGS=\"$(ARGS)\""

################################
### MAINTENANCE PAGES REMOTE ###
################################

# Remote commands for updating the maintenance pages
update-maintenance-page-remote-frontend:
	scp -r ./maintenance/frontend/* root@142.93.104.164:/home/nginx/maintenance/simonmariani.com/

update-maintenance-page-remote-api:
	scp -r ./maintenance/api/* root@142.93.104.164:/home/nginx/maintenance/api.simonmariani.com/