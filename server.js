const express = require('express');
const routes = require('./routes');
const app = express();

const logger = require('morgan');
const mongoose = require('mongoose');
const jsonParser = express.json();

app.use(jsonParser);
app.use('/dev/v1', routes);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});
