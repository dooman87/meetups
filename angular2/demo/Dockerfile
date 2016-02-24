FROM alpine:3.3
MAINTAINER Dmitry Pokidov

RUN apk add --update nodejs git python make g++ && rm -rf /var/cache/apk/*

WORKDIR /
ADD package.json /angular2/demo/
ADD tsconfig.json /angular2/demo/
ADD app/ angular2/demo/app/

WORKDIR /angular2/demo
RUN npm install -g tsd
RUN npm install 

EXPOSE 3000 3001
VOLUME ["/angular2/demo/app"]

ENTRYPOINT ["npm", "start"]

