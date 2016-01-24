/**
 * Created by lenovo on 1/24/2016.
 */
var mongoose = require('mongoose');
var showRoomSchema = require('../models/showRoom')
var showroom;
module.exports = {
    getShowRoomById: function (id, callback) {
        showRoomSchema.find({"showroom_id": id}, function (error, showroom) {
            if (error) {
                console.log(error);
                callback(error, null);
            }

            callback(null, showroom);
        });
    }
}
