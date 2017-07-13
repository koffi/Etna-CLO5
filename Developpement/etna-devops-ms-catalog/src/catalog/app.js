"use strict";

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');

const hotelRoute = require("./routes/hotel.route");
const roomRoute = require("./routes/room.route");


class App {

    constructor() {
        this.express = express();
        this.express.use(cors());
        this.middleware();
        this.routes();
    }

    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        // Hotels
        this.express.use('/hotel', hotelRoute.default);
        // Rooms
        this.express.use('/room', roomRoute.default);
    }
}

exports.default = new App().express;
