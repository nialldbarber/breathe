import { switchColors } from '~/utils/colors';

const colors = [
  { width: '33.33%', background: '#111' },
  { width: '66.66%', background: '#222' },
  { width: '100%', background: '#333' },
];

describe('Color utils', () => {
  const colorsOne = switchColors(1, '#111', '#222', '#333');
  const colorsTwo = switchColors(2, '#111', '#222', '#333');
  const colorsThree = switchColors(3, '#111', '#222', '#333');

  test(`Input of 1 to be: ${colors[0]}`, () => {
    expect(colorsOne).toBe(colorsOne);
  });
  test(`Input of 1 to be: ${colors[1]}`, () => {
    expect(colorsTwo).toBe(colorsTwo);
  });
  test(`Input of 1 to be: ${colors[2]}`, () => {
    expect(colorsThree).toBe(colorsThree);
  });
});
