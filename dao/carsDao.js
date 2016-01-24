/**
 * Created by lenovo on 1/24/2016.
 */
var mongoose = require('mongoose');
var carsSchema = require('../models/cars')

module.exports = {

    getAllCars: function (callback) {
        carsSchema.find(function (error, cars) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            callback(null, cars);
        });
    }

    /*getCarsByCategory: function (id,callback) {
        carsSchema.find({catagory.name:1,catagory.car_list:1},function (error, cars) {
            if (error) {
                console.log(error);
                callback(error, null);
            }
            callback(null, cars);
        });
    }*/

}