/**
 * Created by lenovo on 3/13/2016.
 */
var express = require('express');
var router = express.Router();
var beaconDao = require('../dao/beaconDao');

router.route('/nameSpace/:nameSpaceId/instanceId/:instanceId')
    .get(function (req, res) {
        beaconDao.getCarIDForBeacon(req.params.nameSpaceId, req.params.instanceId, function (err, carId) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(carId);
        });
    });

module.exports = router;


