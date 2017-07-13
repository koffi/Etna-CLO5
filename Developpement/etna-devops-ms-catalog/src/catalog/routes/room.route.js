"use strict";

const express = require("express");

const roomService = require("./../services/room.service");

/**
 * Room API
 *
 * @export
 * @class RoomRoute
 */
class RoomRoute {

    constructor() {
        this.router = express.Router();
        this.init();
    }

    init() {
        this.router
            .get("/", this.getAll)
            .get("/:id", this.getOne)
            .post("/", this.postRoom)
            .put("/:id", this.putRoom)
            .delete("/:id", this.deleteRoom);
    }

    /**
     * Returns all rooms
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     *
     * @memberOf RoomRoute
     */
    getAll(req, res, next) {
        roomService
            .getRoom()
            .then((data) => {
                res.send(data);
            }).catch((err) => {
                switch (err.name) {
                    case 'Error':
                        res.status(404).send(err.message); // xxx not found
                    default:
                        res.status(500).send(err.message);
                }
            });
    }

    getOne(req, res, next) {
        roomService
            .getOne(req.params.id)
            .then((data) => {
                res.send(data);
            }).catch((err) => {
                switch (err.name) {
                    case 'Error':
                        res.status(404).send(err.message); // xxx not found
                    case 'CastError':
                        res.status(404).send('Invalid id ' + req.params.id);
                    default:
                        res.status(500).send(err.message);
                }
            });
    }

    postRoom(req, res, next) {
        roomService
            .postRoom(req.body)
            .then(() => {
                res.send('Room Added');
            }).catch((err) => {
                switch (err.name) {
                    case 'Error':
                        res.status(404).send(err.message); // xxx not found
                    default:
                        res.status(500).send(err.message);
                }
            });
    }

    putRoom(req, res, next) {
        roomService
            .putRoom(req.params.id, req.body)
            .then(() => {
                res.send('Room update');
            }).catch((err) => {
                switch (err.name) {
                    case 'Error':
                        res.status(404).send(err.message); // xxx not found
                    case 'CastError':
                        res.status(404).send('Invalid id ' + req.params.id);
                    default:
                        res.status(500).send(err.message);
                }
            });
    }

    deleteRoom(req, res, next) {
        roomService
            .deleteRoom(req.params.id)
            .then(() => {
                res.send('Room Delete');
            }).catch((err) => {
                switch (err.name) {
                    case 'Error':
                        res.status(404).send(err.message); // xxx not found
                    case 'CastError':
                        res.status(404).send('Invalid id ' + req.params.id);
                    default:
                        res.status(500).send(err.message);
                }
            });
    }
}

exports.RoomRoute = RoomRoute;
const roomRoute = new RoomRoute();
roomRoute.init();
exports.default = roomRoute.router;
