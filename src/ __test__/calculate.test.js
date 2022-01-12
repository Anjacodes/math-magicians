import calculate from "../logic/calculate";

describe('Calculates correctly according to values passed', () => {
  const obj = {
    total: null,
    next: null,
    operation: null
  };
  const obj2 = {
    total: 4,
    next: 2,
    operation: ''
  }
  it('returns empty object when "AC" is passed', () => {
    expect(calculate(obj, 'AC')).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });
  })
  it('returns an empty object if value is "0"', () => {
    expect(calculate({...obj2, next: '0'}, '0')).toMatchObject({});
  })
})
