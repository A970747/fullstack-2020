const mongoose = require('mongoose');
const http = require('http');
const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

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

http.createServer(app).listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
