FROM alpine:3.3
MAINTAINER Dmitry Pokidov

RUN apk add --update nodejs git python make g++ bash && rm -rf /var/cache/apk/*

ADD package.json /angular2/angular2-quickstart/
ADD typings.json /angular2/angular2-quickstart/
ADD index.html /angular2/angular2-quickstart/
ADD tsconfig.json /angular2/angular2-quickstart/
ADD bs-config.json /angular2/angular2-quickstart/
ADD entrypoint.sh /angular2/angular2-quickstart/
#RUN sed 's/^M$//' /angular2/angular2-quickstart/entrypoint.sh > /angular2/angular2-quickstart/entrypoint.sh
RUN chmod 755 /angular2/angular2-quickstart/entrypoint.sh
#WORKDIR /
#RUN git init &&\
#	git remote add -f origin https://github.com/dooman87/meetups.git &&\
#	git config core.sparseCheckout true &&\
#	echo "angular2/angular2-quickstart" >> .git/info/sparse-checkout &&\
#	git pull origin master

WORKDIR /angular2/angular2-quickstart
#RUN npm install -g tsd
RUN npm install -g watchy
RUN npm install

EXPOSE 3000 3001
VOLUME ["/angular2/angular2-quickstart/app"]

ENTRYPOINT ["bash", "./entrypoint.sh"]

