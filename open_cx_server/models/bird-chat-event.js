const mongoose = require('mongoose');

const bceventSchema = mongoose.Schema({
    creator: {
        type: String, //email of creator
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    description: String,
    attendees:[String],
});

module.exports = bcevent = mongoose.model('BCEvent', bceventSchema);