module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'jest': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'new-cap': [
      1, 
      { 
        'newIsCap': false
      },
    ],
    'no-underscore-dangle': 0,
  }
};
