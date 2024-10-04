const par = require('./Index');

test('debería devolver Par', () => {
  expect(par(8)).toBe("par");
});