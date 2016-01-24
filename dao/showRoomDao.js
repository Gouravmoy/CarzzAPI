/**
 * Created by lenovo on 1/24/2016.
 */
var mongoose = require('mongoose');
var showRoomSchema = require('../models/showRoom')
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
        /*var cursor = showRoomSchema.find({"showroom_id": id}, {
         "car_inventory": 1
         }, function (error, inventory) {
         if (error) {
         console.log(error);
         callback(error, null);
         }
         callback(null, inventory);
         });
         var doc = cursor.hasNext() ? cursor.next() : null;
         var catagoryname;
         if(doc!=null)
         {
         catagoryname = doc.car_inventory.catagory
         for(var carId:doc.car_inventory.)
         }*/
        showRoomSchema.aggregate([
            {$match: {"showroom_id": id}},
            {
                $project: {
                    car_inventory: "$car_inventory",
                    "_id": 0
                },
            },
            {$unwind: "$car_inventory.catagory"},
            {$unwind: "$car_inventory.catagory.car_list"}
        ], function (error, inventory) {
            if (error) {
                console.log(error);
                callback(error, null);
            }


            callback(null, inventory);
        });

    }
}
