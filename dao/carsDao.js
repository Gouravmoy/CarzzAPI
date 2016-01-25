/**
 * Created by lenovo on 1/24/2016.
 */
var mongoose = require('mongoose');
var carsSchema = require('../models/cars');
var modelsSchema = require('../models/models');

module.exports = {

    getAllCars: function (callback) {
        carsSchema.find(function (error, cars) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            callback(null, cars);
        });
    },

    /*getCarsByCategory: function (id,callback) {
     carsSchema.find({catagory.name:1,catagory.car_list:1},function (error, cars) {
     if (error) {
     console.log(error);
     callback(error, null);
     }
     callback(null, cars);
     });
     }*/
    getCarInfoByBeaconDetected: function (id, callback) {
        carsSchema.find({"cars_id": id}, {
            "cars_id": 1,
            "car_name": 1,
            "small_description": 1,
            "available": 1,
            "gallery_images.thumbnail": 1
        }, function (error, carsInfo) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            callback(null, carsInfo);
        });
    },

    getGalleryForCar: function (id, callback) {
        carsSchema.find({"cars_id": id}, {
            "cars_id": 1,
            "car_name": 1,
            "gallery_images": 1
        }, function (error, carsInfo) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            callback(null, carsInfo);
        });
    },
    getModelsForCar: function (id, callback) {
        carsSchema.find({"cars_id": id}, {
            "cars_id": 1,
            "car_name": 1,
            "models": 1
        }, function (error, carsModelInfo) {
            if (error) {
                console.log(error);
                callback(error, null);
            }

            var ids = [];
            for (var key in carsModelInfo) {
                if (carsModelInfo.hasOwnProperty(key)) {
                    var singleModel = carsModelInfo[key];
                    var modelIds = singleModel.models;
                    modelIds.forEach(function (entry) {
                        ids.push(entry.id);
                    });
                    var regexps = ids.map(function (modelId) {
                        // When building regular expressions from strings, use the constructor.
                        return new RegExp(modelId, "i");
                    });

                    modelsSchema.find({model_id: {$in: regexps}}, function (error, modelsInfo) {
                        if (error) {
                            console.log(error);
                            callback(error, null);
                        }
                        callback(modelsInfo);
                    });
                }
            }
        });
    }
};