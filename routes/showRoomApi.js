/**
 * Created by lenovo on 1/24/2016.
 */
var express = require('express');
var router = express.Router();
var showRoomDao = require('../dao/showRoomDao');

router.route('/:id')

    .get(function (req, res) {
        console.log("Inside Api");
        showRoomDao.getShowRoomById(req.params.id, function (err, showroom) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(showroom);
        });
    });

router.route('/inventory/:id')
    .get(function (req, res) {
        showRoomDao.getInventoryById(req.params.id, function (err, inventory) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send(inventory);
        });
    });


module.exports = router;