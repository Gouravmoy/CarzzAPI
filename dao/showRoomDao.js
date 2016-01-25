/**
 * Created by lenovo on 1/24/2016.
 */
var mongoose = require('mongoose');
var showRoomSchema = require('../models/showRoom');
var carSchema = require('../models/cars');
module.exports = {
    getShowRoomById: function (id, callback) {
        showRoomSchema.find({"showroom_id": id}, function (error, showroom) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            callback(null, showroom);
        });
    },
    getInventoryById: function (id, callback) {
        showRoomSchema.aggregate([
            {$match: {"showroom_id": id}},
            {
                $project: {
                    car_inventory: "$car_inventory",
                    "_id": 0
                }
            },
            {$unwind: "$car_inventory.catagory"},
            {$unwind: "$car_inventory.catagory.car_list"}
        ], function (error, inventory) {
            for (var key in inventory) {
                if (inventory.hasOwnProperty(key)) {
                    var singleInventory = inventory[key];
                    var carId = singleInventory.car_inventory.catagory.car_list;
                    carSchema.find({"cars_id": carId}, {
                        "car_name": 1,
                        "small_description": 1,
                        "available": 1,
                        "gallery_images.thumbnail": 1
                    }, function (err, invntCarDtls) {
                        var carId2 = singleInventory.car_inventory.catagory.car_list;
                        if (err) {
                            console.log(error);
                            callback(error, null);
                        }
                        console.log(carId2);
                        console.log(invntCarDtls)
                    });
                    console.log(carId);
                }
            }
            callback(null, inventory);
        });
    }
};
