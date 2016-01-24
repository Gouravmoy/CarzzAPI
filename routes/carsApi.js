var express = require('express');
var router = express.Router();
var carsDao = require('../dao/carsDao');

router.route('/allCars')

    .get(function (req, res) {
        carsDao.getAllCars(function (err, cars) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(cars);
        });
    });
router.route('/allCars/catagory/:id')

    .get(function (req, res) {
        carsDao.getCarsByCategory(req.params.id, function (err, cars) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(cars);
        });
    });


module.exports = router;