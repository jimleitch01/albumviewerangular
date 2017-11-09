FROM ubuntu:16.04 

RUN apt-get update &&  apt-get -y upgrade
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install -g angular-cli

ENTRYPOINT ["ng", "serve"]

