const logger = require('./logger');
const jwt = require('jsonwebtoken');

const requestLogger = (req, res, next) => {
  logger.info('Method: ', req.method);
  logger.info('Path: ', req.path);
  logger.info('Body: ', req.body);
  logger.info('---');
  return next();
};

const tokenExtractor = (req, res, next) => {
  const getTokenFrom = (req) => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      req.decodedToken = authorization.substring(7);
    }
    return null;
  };

  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({error: 'invalid username or password'});

  next();
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({error: 'Unknown endpoint'});
};

const errorHandler = (error, req, res, next) => {
  if (error.name === 'CastError') {
    return res.status(400).send( {error: 'Malformatted  ID'} );
  };
  if (error.name === 'ValidationError') {
    return res.status(400).json( {error: error.message} );
  };
  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({error: 'invalid token'});
  };
  logger.error(error.message);

  return next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
