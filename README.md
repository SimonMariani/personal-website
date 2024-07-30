# Introduction
This is the github of the personal website from Simon Mariani, as of now it contains the general information you would find on a CV, and a chatbot that has been
trained to answer questions about Simon Mariani.


# Running the code

## Production

### Setup
- SSH keygen to be able to pull from github: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
- install docker: 
- install NPM
- create .env file for backend
- create nginx.conf file for nginx server
- use previous ssh keys for automatic deployment: https://github.com/appleboy/ssh-action

### Running
- To run the code simply use docker compose up


## Local

### Setup
- TBD



# TODO
- add links to home for companies and papers and such
- extend projects page with projects including this one
- update the chatbot with more files and make sure it knows that not everything is direct information but also projects
- add file upload extenstion but this requires some form of authentication but you can implement it just on that password so that you can still easily add
a password or something so it shouldn't be that hard
- ssl
- update domain name once it is ready
- SSL: https://mindsers.blog/en/post/https-using-nginx-certbot-docker/



