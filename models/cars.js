var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = require('./models');
var features = require('./features');

var carsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    car_name: String,
    small_description: String,
    price: Number,
    available: Boolean,
    gallery_images: [{
        thumbnail: String,
        profile: String
    }],
    colors_variations: [{
        color_name: String,
        color_hex_code: String,
        image_url: {
            thumbnail: String,
            profile: String
        }
    }],
    //models_id: [{type: Schema.Types.ObjectId, ref: models}],
    models_id: [],
    features: {type: Schema.Types.ObjectId, ref: features}
});

var cars = mongoose.model("cars", carsSchema);
module.exports = cars;