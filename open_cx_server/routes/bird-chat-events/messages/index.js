const messages = require('express').Router();

const all = require('./all');

messages.get('/:eventId', all);
messages.post('/:eventId', all);

module.exports = messages;