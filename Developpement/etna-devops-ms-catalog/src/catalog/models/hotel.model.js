"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: String,
  type: Number,
  address: String,
  latitude: Number,
  longitude: Number,
  attributes: JSON,
  services: JSON,
  medias: JSON,
  rooms: [
    {
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
    },
    quantity : Number
  }]
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
