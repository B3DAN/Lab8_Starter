// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('phone 951-867-5309', ()=> {
    expect(functions.isPhoneNumber('951-867-5309')).toBe(true);
})

test('phone without area code', ()=> {
    expect(functions.isPhoneNumber('867-5309')).toBe(true);
})

test('phone 5309', ()=> {
    expect(functions.isPhoneNumber('5309')).toBe(false);
})

test('passing letter', ()=> {
    expect(functions.isPhoneNumber('My phone number')).toBe(false);
})

test('valid email', () => {
    expect(functions.isEmail('aedanbailey@gmail.com')).toBe(true);
})

test('valid email, different @', () => {
    expect(functions.isEmail('r3zeng@ucsd.edu')).toBe(true);
})

test('email, no @', () => {
    expect(functions.isEmail('r3zeng')).toBe(false);
})

test('email, no .edu', () => {
    expect(functions.isEmail('r3zeng@ucsd')).toBe(false);
})

test('valid password', ()=> {
    expect(functions.isStrongPassword('aaaa')).toBe(true);
})

test('valid password', ()=> {
    expect(functions.isStrongPassword('adbc98dcc983a7')).toBe(true);
})

test('tooLongPassword', ()=> {
    expect(functions.isStrongPassword('5dbc98dcc983a7jhljhlih')).toBe(false);
})


test('doesnt start with a letter', ()=> {
    expect(functions.isStrongPassword('12345')).toBe(false);
})

test('todays date', ()=> {
    expect(functions.isDate('11/17/2022')).toBe(true);
})

test('invalid month but still match regular express', ()=> {
    expect(functions.isDate('99/17/2022')).toBe(true);
})

test('dashes instead of slashs', ()=> {
    expect(functions.isDate('11-17-2022')).toBe(false);
})

test('date in BCE', ()=> {
    expect(functions.isDate('04/21/753 BCE')).toBe(false);
})

test('White', ()=> {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
})

test('Black', ()=> {
    expect(functions.isHexColor('#000')).toBe(true);
})

test('not 3 or 6 digits', ()=> {
    expect(functions.isHexColor('#12345')).toBe(false);
})

test('non-hex digit included', ()=> {
    expect(functions.isHexColor('#ZZZKKK')).toBe(false);
})

