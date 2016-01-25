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
/*router.route('/allCars/catagory/:id')

 .get(function (req, res) {
 carsDao.getCarsByCategory(req.params.id, function (err, cars) {
 if (err) {
 return res.status(500).send(err);
 }
 return res.send(cars);
 });
 });*/

router.route('/beaconsDetected/cars/:id')//shift it to beacons DAO

    .get(function (req, res) {
        carsDao.getCarInfoByBeaconDetected(req.params.id, function (err, carsInfo) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(carsInfo);
        });
    });

router.route('/gallery/car/:id')

    .get(function (req, res) {
        carsDao.getGalleryForCar(req.params.id, function (err, carsGallery) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(carsGallery);
        });
    });

router.route('/models/car/:id')

    .get(function (req, res) {
        carsDao.getModelsForCar(req.params.id, function (err, models) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(models);
        });
    });


module.exports = router;