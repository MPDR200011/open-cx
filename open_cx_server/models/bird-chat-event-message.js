const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    eventID: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = bcmessage = mongoose.model('BCMessage', messageSchema);