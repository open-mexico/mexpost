ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN npm install -g npm

RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip3 install pandas
RUN pip3 install sqlalchemy
