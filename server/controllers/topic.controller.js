const topic = require('../models/topic.model');

async function getTopics(_, res) {
  try {
    const topics = await topic.find();
    res.status(200).send(topics);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function postTopic(req, res) {
  try {
    const topicDoc = await topic.create({ title: req.body.title });
    res.status(201).send(topicDoc);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteTopic(req, res) {
  try {
    await topic.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function voteTopic(req, res) {
  try {
    const { id, dir } = req.params;
    const toUpdate = { _id: id };
    const updated = await topic.findOneAndUpdate(
      toUpdate,
      {
        $inc: { score: dir === 'up' ? 1 : -1 },
      },
      { new: true }
    );
    res.send(updated).status(200);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { getTopics, postTopic, deleteTopic, voteTopic };
