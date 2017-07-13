"use strict";

const mongoose = require("./../db");
const hotel = require("./../models/hotel.model");

/**
 * Class hotel mapper & business logic
 *
 * @class HotelService
 */
class HotelService {
    /**
     * @constructor
     */
    constructor(key) {

    }

    getHotel() {
        return hotel.find().exec();
    }

    getHotelFull() {
        return hotel.find()
            .populate('rooms.room')
            .exec();
    }

    getOne(id) {
        return hotel.findById(id).exec();
    }

    postHotel(newHotel) {
        return hotel.create(newHotel);
    }

    putHotel(id, update) {
        return hotel.findByIdAndUpdate(id, update);
    }

    deleteHotel(id) {
        return hotel.findByIdAndRemove(id);
    }

}

module.exports = new HotelService();
