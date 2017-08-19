const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
});

module.exports = mongoose.model('user', UserSchema);