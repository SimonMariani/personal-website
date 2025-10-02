# Makefile variables
DEPLOYMENT = development
VERSION := $(shell git describe --tags --always)

# Change the shell depending on the operating system
ifeq ($(OS),Windows_NT)
SHELL := C:/Program Files/Git/bin/bash.exe
else
SHELL := /bin/bash
endif

# The general make command just runs the start command
all: start

# Start the docker containers
start:
	docker compose -f docker-compose-dev.yaml up --build --watch --remove-orphans

start-prod:
	docker compose -f docker-compose-prod.yaml up --build -d --remove-orphans

start-prod-local:
	docker network create vm-load-balancer || true
	docker compose -f docker-compose-prod.yaml up --build -d --remove-orphans

# Stop the docker containers
stop:
	docker compose -f docker-compose-dev.yaml down

stop-prod:
	docker compose -f docker-compose-prod.yaml down

# Sync the db with the files in the api/files directory
update-vector-db:
	docker exec personal-website-api python -m scripts.update_vector_db $(ARGS)

remove-vector-db:
	docker exec personal-website-api python -m scripts.remove_vector_db

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

# Remote commands for updating the documents and vector db
update-documents-remote: remove-documents-remote upload-documents-remote update-vector-db-remote

remove-documents-remote:
	ssh root@142.93.104.164 "rm -rf /home/applications/personal-website/api/documents/{*,.*} 2>/dev/null"

upload-documents-remote:
	scp -r ./api/documents/* root@142.93.104.164:/home/applications/personal-website/api/documents

update-vector-db-remote:
	ssh root@142.93.104.164 "cd /home/applications/personal-website && make update-vector-db ARGS=\"$(ARGS)\""

# Remote commands for removing the vector db
remove-vector-db-remote:
	ssh root@142.93.104.164 "cd /home/applications/personal-website && make remove-vector-db"

# Remote commands for updating the maintenance pages
update-maintenance-page-remote-frontend:
	scp -r ./maintenance/frontend/* root@142.93.104.164:/home/nginx/maintenance/simonmariani.com/

update-maintenance-page-remote-api:
	scp -r ./maintenance/api/* root@142.93.104.164:/home/nginx/maintenance/api.simonmariani.com/