import calculate from '../logic/calculate';

describe('Calculates correctly according to values passed', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const obj2 = {
    total: '4',
    next: '2',
    operation: '+',
  };

  it('returns empty object when "AC" is passed', () => {
    expect(calculate(obj, 'AC')).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('returns an empty object if value is "0"', () => {
    expect(calculate({ ...obj2, next: '0' }, '0')).toMatchObject({});
  });

  it('updates next when there is an operation', () => {
    expect(calculate({ ...obj2, operation: '+' }, '9')).toMatchObject({ ...obj2, next: '29', operation: '+' });
  });

  it('returns result if "=" is passed', () => {
    expect(calculate(obj2, '=')).toMatchObject({ total: '6', next: null, operation: null });
  });

  it('adds "." to next', () => {
    expect(calculate(obj2, '.')).toMatchObject({ ...obj2, next: '2.' });
  });

  it('inverts value when "+/-" is passed', () => {
    expect(calculate(obj2, '+/-')).toMatchObject({ ...obj2, next: '-2' });
  });
});
