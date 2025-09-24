# Introduction
This is the github of the personal website from Simon Mariani. It contains a chatbot to answer questions about Simon Mariani and some general information.


# Usage
## Quickstart
The following commands are used for deploying and managing the application
```bash
# In order to run the application simply run the following for the development and production setups respectively
make start
make start-prod

# In order to stop all the containers run for development and production run the following commands respectively
make stop
make stop-prod

# The documents that the chatbot should use in its responses should be put in the `backend/documents` folder. To update the vector db you can then run
make update-vector-db

# If you want to reset the vector db run after for example changing the schema, run
make remove-vector-db

# In order to test if the production docker compose runs you can run it locally by running
make start-prod-local
```

## Remote
For managing the remote application some useful commands have been added to the make file, note that on push the github worflow already updates the applciation
```bash
# In order to update the remote documents from the local documents folder
make update-documents-remote
```


# TODO
- Rename backend to api
- Add tests
- Use another vector database than milvus because it doesn't seem very stable and I had to roll back a couple of versions for it to work
- Maybe update the mainenance pages to be cooler but they are also fine like this
- Update the CV once updated
- Add some charts with skills that can be cool, for example the radar chart
- make it mobile friendly


