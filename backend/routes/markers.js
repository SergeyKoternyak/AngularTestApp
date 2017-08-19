const express = require('express');
const router = express.Router();
const Markers = require('../models/markers.model');

// Get markers
router.post('/get', (req, res) => {
    Markers.findOne({ markersUserId: req.body.userId }, (err, userMarkers) => {
        if (userMarkers) {
            return res.send(userMarkers.markers);
        }

        return res.send([]);
    });
});

// Save markers
router.post('/save', (req, res) => {
    Markers.findOneAndUpdate(
        { markersUserId: req.body.markersUserId },
        { $set: { markers: req.body.markers } },
        { new: true },
        (err, userMarkers) => {
            if (err) { return console.log(err); }

            if (!userMarkers) {
                new Markers(req.body).save(); 
            }
        }
    );

});

module.exports = router;