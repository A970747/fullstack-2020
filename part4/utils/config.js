require('dotenv').config();

const {MONGODB_URI, TEST_MONGODB_URI, PORT} = process.env;
let URI = MONGODB_URI;

if (process.env.NODE_ENV === 'test') {
  URI = TEST_MONGODB_URI;
}

module.exports = {
  URI,
  PORT,
};
