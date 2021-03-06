const express = require('express');
const cors = require('cors');
require('express-async-errors');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use('/api/login', loginRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);

if (process.env.NODE_ENV === 'test') {
  const resetRouter = require('./controllers/reset');
  app.use('/api/testing', resetRouter);
};

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
