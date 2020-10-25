const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const db = require('./models/db');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

const getColby = (id, callback) => {
  db.query('SELECT * FROM wrestlers where forename = Colby', null, callback);
};

app.get('/test', async (req) => {
  db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  getColby(req, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('success');
  });
});

app.listen(3001, () => console.log('Express server is running on localhost:3001'));
