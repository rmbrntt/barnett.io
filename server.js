// import express from 'express';
// import morgan from 'morgan';
//
//
// const app = express();
//
// app.set('port', (process.env.API_PORT || 3001));
//
// if (process.env.NODE_ENV !== 'TEST') {
//   app.use(morgan('combined'));
// }
//
// app.use('/', express.static(path.join(__dirname, '/client/build')));
//

/* eslint-disable no-param-reassign */
const express = require('express');
const path = require('path');

const app = express();

app.set('port', (8080));

app.use('/', express.static(path.join(__dirname, '/build')));
app.listen(app.get('port'), () => {
  console.log(`Server running at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
