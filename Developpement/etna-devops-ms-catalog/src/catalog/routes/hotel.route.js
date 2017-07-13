"use strict";

const express = require("express");

const hotelService = require("./../services/hotel.service");

/**
 * Hotel API
 *
 * @export
 * @class HotelRoute
 */
class HotelRoute {

    constructor() {
        this.router = express.Router();
        this.init();
    }

    init() {
        this.router
            .get("/", this.getAll)
            .get("/getHotelFull", this.getHotelFull)
            .get("/:id", this.getOne)
            .post("/", this.postHotel)
            .put("/:id", this.putHotel)
            .delete("/:id", this.deleteHotel);
    }

    /**
     * Returns all hotels
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     *
     * @memberOf HotelRoute
     */
    getAll(req, res, next) {
        hotelService
            .getHotel()
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

    getHotelFull(req, res, next) {
        hotelService
            .getHotelFull()
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
        hotelService
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

    postHotel(req, res, next) {
        hotelService
            .postHotel(req.body)
            .then(() => {
                res.send('Hotel Added');
            }).catch((err) => {
                switch (err.name) {
                    case 'Error':
                        res.status(404).send(err.message); // xxx not found
                    default:
                        res.status(500).send(err.message);
                }
                res
                    .status(201)
                    .send();
            }).catch((err) => {
                res.status(500).send({ error: err.message });
            });
    }

    putHotel(req, res, next) {
        hotelService
            .putHotel(req.params.id, req.body)
            .then(() => {
                res.send('Hotel update');
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


    deleteHotel(req, res, next) {
        hotelService
            .deleteHotel(req.params.id)
            .then(() => {
                res.send('Hotel Delete');
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


exports.HotelRoute = HotelRoute;
const hotelRoute = new HotelRoute();
hotelRoute.init();
exports.default = hotelRoute.router;
