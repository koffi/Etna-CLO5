#!/usr/bin/env bash

DB="catalog"
COLLECTIONS=$(echo "hotels,rooms" | sed 's/,/ /g')
for collection in $COLLECTIONS; do
    echo "Exporting $DB/$collection ..."
    mongoexport -d $DB -c $collection -o /vagrant/datasets/$collection.json
done