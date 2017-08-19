const mongoose = require('mongoose');

let MarkersSchema = new mongoose.Schema({
    markersUserId: {
        type: String
    },
    markers: {
        type: []
    }
});

module.exports = mongoose.model('markers', MarkersSchema);