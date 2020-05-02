import { minToMs, secToMs, msToSec } from '~/utils/time';

describe('Time utils', () => {
  test('1 minute equals 60000 milliseconds', () => {
    expect(minToMs(1)).toBe(60000);
  });

  test('1 second to equal 1000 milliseconds', () => {
    expect(secToMs(1)).toBe(1000);
  });

  test('1000 milliseconds to equal 1 seconds', () => {
    expect(msToSec(1000)).toBe(1);
  });
});
