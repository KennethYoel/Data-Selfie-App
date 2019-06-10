const express = require('express');
const app = express();
app.listen(3000, () => console.log('Listening at port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

// POST method route
app.post('/api', (request, response) => {
  console.log('I got a request!');
  console.log(request.body);
  const data = request.body;
  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.long
  });
});
