require('express-async-errors');
const express = require('express');
const path = require('path');

const app = express();

require('./start/routes')(app);

require('./start/db')();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}



app.listen(port, () => console.log(`Listening on port ${port}`));
