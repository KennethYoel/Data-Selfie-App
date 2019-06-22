const express = require('express');
const dataStore = require('nedb');

const app = express();
app.listen(3000, () => console.log('Listening at port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new dataStore('database.db');
database.loadDatabase(); // Create and save database to local file named database.db.
//database.insert({ name: 'privateGee', status: 'danger' }); // Adding json data into a database.

// GET method route
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

// POST method route
app.post('/api', (request, response) => {
  console.log('I got a request!');
  const data = request.body;
  const timeStamp = Date.now();
  data.timeStamp = timeStamp;
  database.insert(data);
  response.json(data);
  console.log(database);
});
