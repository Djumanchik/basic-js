const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

// const arr = [ 1, 2, 3, 1337, 4, 5 ];
// console.log (arr);
// console.log(typeof arr);

function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  if (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next') { // удаляем оконечные инстуркции
    arr.splice(-1, 1); 
    console.log(arr);
  } else if (arr[0] === '--double-prev' || arr[0] === '--discard-prev') { // удаляем оконечные инстуркции
    arr.splice(0, 1);
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    } else if (arr[i] === '--double-prev') {
      result.push(arr[i - 1]);
    } else if (arr[i] === '--double-next') {
      result.push(arr[i + 1]);
    } else if (arr[i] === '--discard-prev') {
      result.pop(arr[i]);
    } else if (arr[i] === '--discard-next') {
      arr.splice(i, 1);
    } else if (typeof arr[i] === 'string' || 'boolean' || 'object' || 'symbol') {
      result.push(arr[i]);
      // return arr
      // console.log(arr);
    }  
    console.log(result);
  }
  return result; 
};

// console.log(transform(arr));

module.exports = {
  transform
};
