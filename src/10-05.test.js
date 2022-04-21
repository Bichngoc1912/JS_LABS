import { classifyStudentV3 } from './05-09.main';

describe('classifyStudentV3()', () => {
  test('should return Invalid mark! when n < 0', () => {
    const value = classifyStudentV3(-1)
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when n > 10', () => {
    const value = classifyStudentV3(91)
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellense mark! when n > 10', () => {
    const value = classifyStudentV3(91)
    expect(value).toBe('Invalid mark!');
  });
});
