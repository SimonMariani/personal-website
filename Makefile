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

# Sync the db with the files in the backend/files directory
update-vector-db:
	docker exec personal-website-backend python -m scripts.update_vector_db

remove-vector-db:
	docker exec personal-website-backend python -m scripts.remove_vector_db

# Build the frontend, this should be done before pushing and deploying
build-frontend:
	docker exec personal-website-frontend npm run build

# Useful commands
logs-backend:
	docker logs -f personal-website-backend

logs-frontend:
	docker logs -f personal-website-frontend

exec-backend:
	docker exec -it personal-website-backend sh

exec-frontend:
	docker exec -it personal-website-frontend sh

# Remote commands. Note that these commands will ask for the password of the server
update-documents-remote: upload-documents-remote update-vector-db-remote

upload-documents-remote:
	scp -r ./backend/documents/* root@142.93.104.164:/home/applications/personal-website/backend/documents

update-vector-db-remote:
	ssh root@142.93.104.164 "cd /home/applications/personal-website && make update-vector-db"

remove-vector-db-remote:
	ssh root@142.93.104.164 "cd /home/applications/personal-website && make remove-vector-db"