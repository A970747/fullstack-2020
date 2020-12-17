const palindrome = (string) => {
  return string
    .split('')
    .reverse()
    .join('');
};

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item;
  };

  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce(reducer, 0) / array.length;
  }
};

module.exports = {
  palindrome,
  average,
};
