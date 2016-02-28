/**
 * Created by lenovo on 1/24/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showRoomSchema = new Schema({/*
        _id: Schema.Types.ObjectId,
        showroom_id: String,
        name: String,
        phone_no: [String],
        address: {
            street: String,
            city: String,
            dist: String,
            pin: Number,
            state: String
        },
        car_inventory: {
            catagory: [{
                name: String,
                car_list: []
            }]
        }
    */},{ collection: 'showroom' }
);


var showroom = mongoose.model("showroom", showRoomSchema);
module.exports = showroom;