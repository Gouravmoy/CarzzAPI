/**
 * Created by lenovo on 1/23/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelSchema = new Schema({
    _id: Schema.Types.ObjectId,
    model_id: String,
    image_url: [
        {
            thumbnail: String,
            profile: String
        }
    ],
    cost: Number,
    spec_details: [
        {
            description: String
        }
    ]
});

var models = mongoose.model("models", modelSchema);
module.exports = models;
