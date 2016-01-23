var express = require('express');
var router = express.Router();
var daoMongoose = require('../dao/DaoMongoose');

router.route('/allCars')

    .get(function (req, res) {
        daoMongoose.getAllCars(function (err, cars) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(cars)
        });
    });

module.exports = router;