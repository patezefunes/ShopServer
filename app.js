const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/userRoutes');
const toursRouter = require('./routes/tourRoutes');

const app = express();

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tours', toursRouter);

module.exports = app;
