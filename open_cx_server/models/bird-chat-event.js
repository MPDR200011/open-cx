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
    messages:[{
        user: {
            type: String, //email of message author
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        },
        text: {
            type: String,
            required: true
        }
    }],
});

module.exports = bcevent = mongoose.model('BCEvent', bceventSchema);