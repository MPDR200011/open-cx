let BCEvent = require('../../models/bird-chat-event');

const singleEvent = require('express').Router();

singleEvent.get('/:postId', async (req, res) => {
  try {
    const event = await BCEvent.findOne({
      _id: req.params.postId
    });

    res.json(event);
  } catch (err) {
    res.status(400).json({error : err});
  }
});

singleEvent.post('/:postId', async (req, res) => {

  const event = await BCEvent.findOne({
    _id: req.params.postId
  });

  if (!event) return res.status(400).send('Event doesn\'t exist');

  event.creator = req.body.creator;
  event.title = req.body.title;
  event.location = req.body.location;
  event.startTime = req.body.starttime;
  event.description = req.body.description;

  event.save((err) => {
    if (err) {
      res.status(400).json({error: err})
    } else {
      res.json(event);
    }
  });

});

module.exports = singleEvent;
