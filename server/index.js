'use strict';
const express = require('express');
const app = express();
const router = require('./router.js');
const cors = require('cors');
const db = require('./models');

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  await db;
  app.listen(PORT, () => {
    console.log(`Server running at <http://localhost>:${PORT}`);
  });
})();
