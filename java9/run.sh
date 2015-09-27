#! /bin/bash

docker run -it --rm --name java9 -v /opt:/opt/local -v /home/dooman/Projects:/opt/Projects -p 8181:8181 openjdk9 /bin/bash
