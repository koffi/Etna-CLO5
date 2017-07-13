"use strict";

const mongoose = require("./../db");
const room = require("./../models/room.model");

/**
 * Class room mapper & business logic
 *
 * @class RoomService
 */
class RoomService {
    /**
     * @constructor
     */
    constructor(key) {

     }

    getRoom() {
        return room.find().exec();
    }

    getOne(id) {
        return room.findById(id).exec();
    }

    postRoom(newRoom) {      
        return room.create(newRoom);
    }

    putRoom(id, update) {
        return room.findByIdAndUpdate(id, update);
    }

    deleteRoom(id) {
        return room.findByIdAndRemove(id);
    }

}

module.exports = new RoomService();