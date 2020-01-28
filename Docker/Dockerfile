FROM alpine

# INSTALL NODE & NPM
RUN apk add --update nodejs nodejs-npm

# INSTALL IONIC
RUN npm install -g ionic@${IONIC_VERSION}

# INSTALL GIT
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

#FILES DELETION
RUN rm -rf /tmp/* /var/cache/apk/*

# CREATE DIRECTORY
run mkdir /download

# CLONE RISKESTIMATOR
RUN git clone https://github.com/nehers/Riskestimator.git

# Installing ANGULAR
RUN cd Riskestimator && \
    npm i -D -E @angular/cli

WORKDIR Riskestimator
CMD ["ionic", "serve", "--external"]