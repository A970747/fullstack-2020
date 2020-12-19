const express = require('express');
const cors = require('cors');
require('express-async-errors');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
