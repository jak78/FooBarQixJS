const compute = require('./foobarqix');

test('returns the same number when no particular rule applies', () => {
  expect(compute('1')).toBe('1');
  expect(compute('2')).toBe('2');
});

test('returns Foo when multiple of 3', () => {
  expect(compute('6')).toBe('Foo');
  expect(compute('99')).toBe('Foo');
});

