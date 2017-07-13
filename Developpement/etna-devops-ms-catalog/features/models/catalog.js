"use strict";

const {USER_AGENT, REQUEST_DEBUG} = require('./env');
let http = require("http");

if (REQUEST_DEBUG) {
    http = require('http-debug').http;
    http.debug = 2;
}

const catalog = {

    hotels: function() {
        let that = this,
            host= 'localhost',
            port = 7001;

        return {
            post: function(route, body, cb) {

                let options = {
                    hostname: '192.168.33.99',
                    port: '7001',
                    path: '/hotel',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                };

                let req = http.request(options, (res) => {
                    if (res.statusCode === 201) {
                        cb(null, res, res.body);
                    } else {
                        cb(res.error, res);
                    }
                });

                req.on('error', function (e) {
                    cb(e);
                });

                req.write(JSON.stringify(body));
                req.end();
            }
        };
    }
};

module.exports = catalog;
