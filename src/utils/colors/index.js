/**
 * Switch colours fn
 * @param {number} count
 * @param {string} c1
 * @param {string} c2
 * @param {string} c3
 */
const switchColors = (count, c1, c2, c3) => {
  switch (count) {
    case 1:
      return {
        width: '33.33%',
        background: c1,
      };
    case 2:
      return {
        width: '66.66%',
        background: c2,
      };
    case 3:
      return {
        width: '100%',
        background: c3,
      };
    case 4:
      return {
        width: '0',
      };
    default:
      return {
        width: '0',
      };
  }
};

export { switchColors };
