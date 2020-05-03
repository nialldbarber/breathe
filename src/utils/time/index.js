/**
 * Time conversion helpers
 */
const minToMs = (min) => min * 60000;
const minToSec = (min) => min * 60;
const secToMs = (sec) => sec * 1000;
const msToSec = (ms) => ms / 1000;

/**
 * Get all possible divisors of a number
 * @param {number} x
 */
const getDivisors = (x) => {
  let output = [];
  let total = [];

  for (let i = 1; i <= x; i += 1) {
    if (x % i === 0) {
      total = [...total, i];
    }
  }

  if (x < 1) throw new Error('Input must be more that 0');

  output = new Set(total);
  output = Array.from(output);
  output.pop(); // remove x
  output = output.filter((num) => num !== 1 && num <= 60); // don't include 1

  return output;
};

export { minToMs, minToSec, secToMs, msToSec, getDivisors };
