const BCMessage = require('../../../models/bird-chat-event-message');

const messages = require('express').Router();

messages.get('/:eventId', async (req, res) => {
    const messages = await BCMessage.find({
        eventID: req.params.eventId
    });

    if (!messages) return res.status(400). send('event not found');

    res.json(messages);
});

messages.post('/:eventId', async (req, res) => {

    const message = new BCMessage({
        eventID: req.params.eventId,
        userID: req.body.userId,
        text: req.body.text
    });

    message.save((err) => {
        if (err) {
            return res.status(400).json({error: err});
        }

        res.json(message);
    });
});

module.exports = messages;