const compute = require('./foobarqix');

test('returns the same number when no particular rule applies', () => {
    expect(compute('1')).toBe('1');
});

describe('multiples', () => {
    test('returns Foo when the number is a multiple of 3', () => {
        expect(compute('99')).toBe('Foo');
    });

    test('returns Bar when the number is a multiple of 5', () => {
        expect(compute('10')).toBe('Bar*');
    });

    test('returns Qix when the number is a multiple of 7', () => {
        expect(compute('14')).toBe('Qix');
    });

    test('returns FooBar when the number is a multiple of both 3 and 5', () => {
        expect(compute('30')).toBe('FooBarFoo*');
    });

    test('returns FooBarQix when the number is a multiple of 3, 5 & 7', () => {
        expect(compute('210')).toBe('FooBarQix*');
    });
})
describe('digits substitution', () => {
    test('returns Foo when the number contains a 3 but is not divisible by 3', () => {
        expect(compute('331')).toBe('FooFoo');
    });
    test('returns Foo when the number contains a 3 and is divisible by 3', () => {
        expect(compute('333')).toBe('FooFooFooFoo');
    });
    test('returns Bar when the number contains a 5 and is divisible by 5', () => {
        expect(compute('55')).toBe('BarBarBar');
    });
    test('returns Bar when the number contains a 5 but is not divisible by 5', () => {
        expect(compute('52')).toBe('Bar');
    });
    test('returns Qix when the number contains a 7 and is divisible by 7', () => {
        expect(compute('77')).toBe('QixQixQix');
    });
    test('returns Qix when the number contains a 7 but is not divisible by 7', () => {
        expect(compute('71')).toBe('Qix');
    });
    test('returns * when the number contains a 0', () => {
        expect(compute('101')).toBe('1*1');
        expect(compute('303')).toBe('FooFoo*Foo');
        expect(compute('105')).toBe('FooBarQix*Bar');
        expect(compute('10101')).toBe('FooQix**');
        expect(compute('10104')).toBe('Foo**');
    });
})


