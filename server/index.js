'use strict';
const express = require('express');
const app = express();
const router = require('./router.js');
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(router);

(async () => {
  await db;
  app.listen(PORT, () => {
    console.log(`Server running at <http://localhost>:${PORT}`);
  });
})();
