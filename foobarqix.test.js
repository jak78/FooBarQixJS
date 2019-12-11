const compute = require('./foobarqix');

test('returns the same number when no particular rule applies', () => {
  expect(compute('1')).toBe('1');
});

test('returns Foo when multiple of 3', () => {
  expect(compute('99')).toBe('Foo');
});

