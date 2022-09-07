/**
 * 
 * @param {Number} data_size
 * @returns {Number}
 */
const getRedundantBits = data_size => {
  for (let i = 0; i < data_size; ++i) {
    if (2 ** i >= data_size + i + 1) return i;
  }

  return 3;
};

export default getRedundantBits;
