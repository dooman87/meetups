FROM debian:stable

MAINTAINER Dmitry Pokidov

ENV BUILD_NUM=102
ENV FILENAME=jdk-9-ea+${BUILD_NUM}_linux-x64_bin.tar.gz

RUN \
  apt-get update && \
  apt-get install -y wget && \
  apt-get clean

RUN \ 
  wget --no-check-certificate --header "Cookie: oraclelicense=accept-securebackup-cookie" http://www.java.net/download/jdk9/archive/${BUILD_NUM}/binaries/${FILENAME} && \
  tar zxvf ${FILENAME} -C /opt 

ENV PATH /opt/jdk-9/bin:$PATH
ENV JAVA_HOME /opt/jdk1.9.0 
