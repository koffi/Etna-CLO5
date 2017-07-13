"use strict";

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Mongo connection
mongoose.connect(
    'mongodb://192.168.33.99:27017/catalog',
    {useMongoClient: true}
);

const db = mongoose.connection;

// Connection status
db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function(){
    console.log('Connection ok!');
});

module.exports = mongoose;
