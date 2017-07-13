const {defineSupportCode} = require('cucumber');
const {expect} = require('chai');
const World = require('./../support/world');

let lastResponse;
let lastData;

defineSupportCode(({Given, When, Then}) => {
    Given(/^I send POST request to "([^"]*)" hotel route with the following:$/, (route, body, callback) => {
        World.postHotel(route, body, (error, res, data) => {
            if (error) {
                callback(error);
            } else {
                lastResponse = res;
                lastData = data;
                callback();
            }
        });
    });

    Given(/^the response status should be (\d+)$/, (status, callback) => {
        if (lastResponse.statusCode !== status) {
            callback(new Error('Invalid http status: ' + lastResponse.statusCode));
        } else {
            callback();
        }
    });
});
