const { Schema, model } = require('mongoose');

const TopicSchema = new Schema(
  {
    title: { type: String, required: true },
    score: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Topic = model('Topic', TopicSchema);

module.exports = Topic;
