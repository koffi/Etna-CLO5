"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: String,
    type: Number,
    attributes: JSON,
    services: JSON,
    medias: JSON
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;

