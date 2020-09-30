const add = require('../src/index.js')

it('validate add 2+2 = 4', () => {
    const actual = add(2, 2);
    // https://jestjs.io/docs/en/expect#tobevalue
    expect(actual).toBe(4);
});

it('validate add handles negative numbers', () => {
    const actual = add(2, -2);
    // https://jestjs.io/docs/en/expect#tobevalue
    expect(actual).toBe(0);
});