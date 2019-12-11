const compute = require('./foobarqix');

test('returns the same number when no particular rule applies', () => {
  expect(compute('1')).toBe('1');
});

test('returns Foo when multiple of 3', () => {
  expect(compute('99')).toBe('Foo');
});

test('returns Bar when multiple of 5', () => {
  expect(compute('10')).toBe('Bar');
});

test('returns Qix when multiple of 7', () => {
  expect(compute('14')).toBe('Qix');
});

test('returns FooBar when multiple of both 3 and 5', () => {
  expect(compute('30')).toBe('FooBar');
});

test('returns FooBarQix when multiple of 3, 5 & 7', () => {
  expect(compute('210')).toBe('FooBarQix');
});


