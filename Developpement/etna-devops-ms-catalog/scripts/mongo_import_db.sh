#!/usr/bin/env bash

DB="catalog"
COLLECTIONS=$(echo "hotels,rooms" | sed 's/,/ /g')
for collection in $COLLECTIONS; do
    echo "Importing $DB/$collection ..."
    mongoimport -d $DB -c $collection --file /vagrant/datasets/$collection.json
done