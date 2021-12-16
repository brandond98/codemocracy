'use strict';
const router = require('express').Router();
const topicController = require('./controllers/topic.controller');

router.get('/topics', topicController.getTopics);
router.post('/topics/new', topicController.postTopic);
router.put('/topics/:id/:dir', topicController.voteTopic);
router.delete('/topics/:id', topicController.deleteTopic);
router.all('*', (req, res) => {
  res.status(404).send('Invalid URL!');
});

module.exports = router;
