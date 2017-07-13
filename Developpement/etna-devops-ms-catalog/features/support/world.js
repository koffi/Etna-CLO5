"use strict";

const tokens = require('./tokens');
const catalog = require('./../models/catalog');

const World = {
    postHotel: function (route, body, cb) {
        catalog.hotels().post(route, body, cb);
    }
};

module.exports = World;
