#!/bin/sh
mongoimport --db test --collection books --file books.txt --upsert

mongo books-index.js
