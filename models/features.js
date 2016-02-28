/**
 * Created by lenovo on 1/24/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var featuresSchema = new Schema({});
var feature = mongoose.model("features", featuresSchema);
module.exports = feature;
