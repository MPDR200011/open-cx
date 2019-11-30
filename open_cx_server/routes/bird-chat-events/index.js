let Event = require('../../models/bird-chat-event');

const events = require('express').Router();

const all = require('./all');
const single = require('./single');
const messages = require('./messages');

events.get('/', all);
events.post('/', all);

events.get('/:postId', single);
events.post('/:postId', single);

events.use('/messages', messages);

module.exports = events;
