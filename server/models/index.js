const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/<dbName>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('There was an error tarting the server');
});

db.once('open', () => {
  console.log('Successfully connected to the database.');
});

module.exports = db;
