FROM alpine:3.3
MAINTAINER Dmitry Pokidov

RUN apk add --update nodejs git python make g++ && rm -rf /var/cache/apk/*

WORKDIR /
RUN git init &&\
	git remote add -f origin https://github.com/dooman87/meetups.git &&\
	git config core.sparseCheckout true &&\
	echo "angular2/angular2-quickstart" >> .git/info/sparse-checkout &&\
	git pull origin master

WORKDIR /angular2/angular2-quickstart
RUN npm install -g tsd
RUN npm install

EXPOSE 3000 3001
#VOLUME ["/angular2/angular2-quickstart/app"]

ENTRYPOINT ["npm", "start"]

