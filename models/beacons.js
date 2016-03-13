/**
 * Created by lenovo on 3/13/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({}, {collection: 'beacons'}
);


var beacon = mongoose.model("beacons", beaconSchema);
module.exports = beacon;