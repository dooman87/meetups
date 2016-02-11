FROM alpine:3.3
MAINTAINER Dmitry Pokidov

RUN apk add --update nodejs git && rm -rf /var/cache/apk/*

WORKDIR /
RUN git init &&\
	git remote add -f origin https://github.com/dooman87/meetups.git &&\
	git config core.sparseCheckout true &&\
	echo "angular2/angular2-quickstart" >> .git/info/sparse-checkout &&\
	git pull origin master

WORKDIR /angular2-quickstart
RUN npm install

ENTRYPOINT [cd /angular2-quickstart && RUN npm start]
