const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const middleware = require('./utils/middleware');
const config = require('./utils/config');
const logger = require('./utils/logger');

const app = express();

logger.info('Connecting to ', config.URI);

mongoose.connect(config.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
)
  .then(() => logger.info('Connected Successfully'))
  .catch((error) => logger.error('Error connecting to MongoDB', error.message));

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
