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

# The documents that the chatbot should use in its responses should be put in the `api/documents` folder. To update the vector db you can then run
make update-vector-db

# If you want to reset the vector db run after for example changing the schema, run
make remove-vector-db

# In order to test if the production docker compose runs you can run it locally by running
make start-prod-local
```

## API keys
The openai api key can be managed in your account's api keys page here: https://platform.openai.com/api-keys and the payments can be managed in your account's payments page here: https://platform.openai.com/settings/organization/billing/overview

## Remote
For managing the remote application some useful commands have been added to the make file, note that on push the github worflow already updates the applciation
```bash
# In order to update the remote documents from the local documents folder
make update-documents-remote

# In order to only update a specific file from the local documents folder
make update-vector-db-remote ARGS="--overwrite --file Simon_Mariani_CV.pdf"
```


# TODO
- Use your own openai api key -> the api key seems to be working but the billing details are not setup yet, I can only pay by creditcard so get one first and then update the billing details there to start using the api key
- Add some tests to know that it is still running and that all the functionalities work
- Use another vector database than milvus because it doesn't seem very stable and I had to roll back a couple of versions for it to work

# DONE
- Add some charts with skills that can be cool, for example the radar chart
- Feedback updates
- Update the skills in the charts as you have more experience now
- Rename backend to api
- make it mobile friendly
- Fix mobile chat to be better, hook up your phone though because it is slightly annoying since it is only visible on physical devices
- Update the CV once updated
- Update relevant files
- Remove phone number from website and cv
- Add tests