/* eslint-disable no-param-reassign */
const express = require('express');
const path = require('path');

const app = express();

app.set('port', (8080));

app.use('/', express.static(path.join(__dirname, '/build')));
app.listen(app.get('port'), () => {
  console.log(`Server running at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
