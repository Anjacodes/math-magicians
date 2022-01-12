import operate from '../logic/operate';

describe('Make basic arithmetic operations', () => {
  it('Sum of two numbers', () => {
    expect(operate('3', '5', '+')).toBe('8');
  });

  it('Substract number one from number two', () => {
    expect(operate('3', '5', '-')).toBe('-2');
  });

  it('Multiply two numbers', () => {
    expect(operate('3', '5', 'x')).toBe('15');
  });

  it('Divide number one by number two', () => {
    expect(operate('25', '5', '÷')).toBe('5');
  });

  it('Try to divide by zero', () => {
    expect(operate('25', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('Module of number one divided by number two', () => {
    expect(operate('25', '7', '%')).toBe('4');
  });

  it('Try to module by zero', () => {
    expect(operate('25', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
