# Makefile variables
DEPLOYMENT = development
VERSION := $(shell git describe --tags --always)

# The docker compose file to use based on the deployment type
COMPOSE_FILE := docker-compose-prod.yaml
ifeq ($(DEPLOYMENT),development)
  COMPOSE_FILE := docker-compose-dev.yaml
endif

# Change the shell depending on the operating system
ifeq ($(OS),Windows_NT)
SHELL := C:/Program Files/Git/bin/bash.exe
else
SHELL := /bin/bash
endif

# The general make command
all: start

# Start the docker containers
start:
	docker-compose -f $(COMPOSE_FILE) up --build

# Stop the docker containers
stop:
	docker-compose -f $(COMPOSE_FILE) down

# Useful commands
exec-backend:
	docker exec -it personal-website-backend sh

exec-frontend:
	docker exec -it personal-website-frontend sh