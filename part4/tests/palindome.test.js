const palindrome = require('../utils/for_testing').palindrome;

test('palindrome of a', () => {
  const result = palindrome('a');

  expect(result).toBe('a');
});

test('palindrome of react', () => {
  const result = palindrome('react');

  expect(result).toBe('tcaer');
});

test('palindrome of the quick brown fox runs', () => {
  const result = palindrome('the quick brown fox runs');

  expect(result).toBe('snur xof nworb kciuq eht');
});

test('palindrome of releveler', () => {
  const result = palindrome('releveler');

  expect(result).toBe('releveler');
});
