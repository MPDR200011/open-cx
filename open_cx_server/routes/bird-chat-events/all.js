let BCEvent = require('../../models/bird-chat-event');

const allBCEvents = require('express').Router();

allBCEvents.get('/', async (req, res) => {
  try {
    const events = await BCEvent.find();
    res.json(events);
  }
  catch (err) {
    res.json({ message: err })
  }
});

allBCEvents.post('/', async (req, res) => {
  console.log(req.body);
  res.send("psot on bcevents");
});

module.exports = allBCEvents;