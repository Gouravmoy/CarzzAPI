/**
 * Created by lenovo on 1/23/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var specsSchema = new Schema({});
var spec = mongoose.model("specs", specsSchema);
module.exports = spec;