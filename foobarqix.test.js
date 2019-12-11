const compute = require('./foobarqix');

test('returns the same number when no particular rule applies', () => {
  expect(compute('1')).toBe('1');
});