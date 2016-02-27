#!/bin/bash

watchy -p  -w  app/ -- bash -c 'if [ "$EVENT" == "change" ] && [[ "$FILE" == *.ts ]] ; then npm run tsc; fi' &
node server.js
