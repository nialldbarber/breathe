/**
 * Switch colours fn
 * @param {*} count
 */
const switchColors = (count) => {
  switch (count) {
    case 1:
      return {
        width: '33.33%',
        background: '#2F7BDD',
      };
    case 2:
      return {
        width: '66.66%',
        background: '#7C38ED',
      };
    case 3:
      return {
        width: '100%',
        background: '#38ED7C',
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
