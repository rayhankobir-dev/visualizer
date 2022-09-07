/**
 * 
 * @param {Number} num
 * @returns {Boolean}
 */
const isPowerOf2 = num => {
  if (num === 0) {
    return false;
  }

  return !(num & (num - 1)); 
};

export default isPowerOf2;
