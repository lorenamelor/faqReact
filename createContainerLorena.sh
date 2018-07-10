#!/bin/bash
echo preparing your ship...
echo What\'s the name of your project?
read PROJECT_NAME
LOCATE_VOLUME=$(pwd)
echo We create your project in $LOCATE_VOLUME
echo Which door would you like to expose?
read EXPOSE_DOOR
docker create -it --name $PROJECT_NAME -v $LOCATE_VOLUME:/develop -p $EXPOSE_DOOR:$EXPOSE_DOOR lorena:v2
echo initialize your container...
echo container redy
docker start $PROJECT_NAME
docker attach $PROJECT_NAME
