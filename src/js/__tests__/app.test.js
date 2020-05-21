import Validator from '../app';


test('Верный ввод', () => {
  const received = new Validator('skyWalker');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Верный ввод', () => {
  const received = new Validator('AR4ANGEL');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Верный ввод', () => {
  const received = new Validator('AL');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Верный ввод', () => {
  const received = new Validator('C3PO');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Верный ввод', () => {
  const received = new Validator('E-two-E-four');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Верный ввод', () => {
  const received = new Validator('OB-_-1-_-CannotB');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Верный ввод', () => {
  const received = new Validator('ma573r');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Верный ввод', () => {
  const received = new Validator('e404pagen0tf0und');
  received.validateUserName();
  const expected = true;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('#8)');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('_Osip');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('Zahar_');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('_E2_');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('R2D2');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('антон');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('Kai1000Ren');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});

test('Не верный ввод', () => {
  const received = new Validator('100john123');
  received.validateUserName();
  const expected = false;
  expect(received.nameValidate).toBe(expected);
});
