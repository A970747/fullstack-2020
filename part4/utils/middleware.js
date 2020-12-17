const logger = require('./logger');

const requestLogger = (req, res, next) => {
  logger.info('Method: ', req.method);
  logger.info('Path: ', req.path);
  logger.info('Body: ', req.body);
  logger.info('---');
  return next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send( {Error: 'Unknown endpoint'} );
};

const errorHandler = (error, req, res, next) => {
  logger.error(error._message);

  if (error.name === 'CastError') {
    return res.status(400).send( {Error: 'Malformatted  ID'} );
  };
  if (error.name === 'ValidationError') {
    return res.status(400).json( {Error: error.message} );
  };

  return next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
