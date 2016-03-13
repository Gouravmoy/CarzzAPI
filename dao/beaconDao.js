/**
 * Created by lenovo on 3/13/2016.
 */
var mongoose = require('mongoose');
var beaconSchema = require('../models/beacons');

module.exports = {
    getCarIDForBeacon: function (nameSpaceId, instanceId, callback) {
        beaconSchema.find({
            "beacon_nameSpace": nameSpaceId,
            "beacon_instance": instanceId
        }, {"link_id": 1}, function (error, carId) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            callback(null, carId);
        })
    }
};
