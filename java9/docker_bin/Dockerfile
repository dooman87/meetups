FROM phusion/baseimage:latest

MAINTAINER Dmitry Pokidov

ENV BUILD_NUM=b82
ENV FILENAME=jdk-9-ea-bin-${BUILD_NUM}-linux-x64-16_sep_2015.tar.gz

RUN apt-get update

RUN \
  apt-get install -y wget && \
  wget --no-check-certificate --header "Cookie: oraclelicense=accept-securebackup-cookie" http://www.java.net/download/jdk9/archive/${BUILD_NUM}/binaries/${FILENAME} 

RUN \
  tar zxvf ${FILENAME} -C /opt 

ENV PATH /opt/jdk1.9.0/bin:$PATH
ENV JAVA_HOME /opt/jdk1.9.0 
