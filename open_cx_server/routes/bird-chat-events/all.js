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

  const event = new BCEvent({
    creator: req.body.creator,
    title: req.body.title,
    location: req.body.location,
    startTime: req.body.starttime,
    description: req.body.description
  });

  event.save((err) => {
    if (err) {
      return res.status(400).send('Bad form parameters.');
    } else {
      return res.send(req.body);
    }
  });
});

module.exports = allBCEvents;