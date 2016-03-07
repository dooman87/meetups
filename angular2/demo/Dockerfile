FROM alpine:3.3
MAINTAINER Dmitry Pokidov

RUN apk add --update nodejs git python make g++ bash && rm -rf /var/cache/apk/*

ADD app/ angular2/demo/app/
ADD server.js /angular2/demo/
ADD package.json /angular2/demo/
ADD typings.json /angular2/demo/
ADD index.html /angular2/demo/
ADD tsconfig.json /angular2/demo/
ADD bs-config.json /angular2/demo/
ADD entrypoint.sh /angular2/demo/
RUN chmod 755 /angular2/demo/entrypoint.sh

WORKDIR /angular2/demo
RUN npm install -g watchy
RUN npm install

EXPOSE 3000 3001
VOLUME ["/angular2/demo/app"]

ENTRYPOINT ["bash", "./entrypoint.sh"]

