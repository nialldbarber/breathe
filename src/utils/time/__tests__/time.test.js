import { minToMs, secToMs, msToSec, getDivisors } from '~/utils/time';

describe('Time utils', () => {
  const expectedArr = [2, 3, 4, 5, 6, 10, 12, 15, 20, 30];

  test('1 minute equals 60000 milliseconds', () => {
    expect(minToMs(1)).toBe(60000);
  });

  test('1 second to equal 1000 milliseconds', () => {
    expect(secToMs(1)).toBe(1000);
  });

  test('1000 milliseconds to equal 1 seconds', () => {
    expect(msToSec(1000)).toBe(1);
  });

  test('Input of -1 should throw an error', () => {
    expect(() => getDivisors(-1)).toThrow('Input must be more that 1');
  });

  test(`Input of 60 should yield ${expectedArr}`, () => {
    expect(getDivisors(60)).toEqual(expectedArr);
  });
});
