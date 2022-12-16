const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// ENV
const config = {
  PORT: process.env.PORT,
};

// ROUTER
const monsterRouter = require('./src/router/monsters');

app.use('/api/monsters', monsterRouter);

app.listen(config.PORT, () => console.log('server run at port ' + config.PORT));
