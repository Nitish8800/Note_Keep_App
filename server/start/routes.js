const express = require('express');
const cors = require('cors');
const notes = require('../routes/notes');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use('/notes', notes);
  app.use(express.static('client/build'));

  app.use(error);
};
