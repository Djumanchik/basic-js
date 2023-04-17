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

const arr = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
console.log (arr);

function transform(arr) {
  
  if (Array.isArray(arr) === false) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  const array = arr.slice(0);
  console.log(array);
  let result = [];
  if (array[array.length - 1] === '--double-next' || array[array.length - 1] === '--discard-next') { // удаляем оконечные инстуркции
    array.splice(-1, 1); 
    console.log(array);
  } else if (array[0] === '--double-prev' || array[0] === '--discard-prev') { // удаляем оконечные инстуркции
    array.splice(0, 1);
  }
  for (let i = 0; i <= array.length - 1; i++) {
    if (typeof array[i] === 'number') {
      result.push(array[i]);
    } else if (array[i] === '--double-prev') {
      result.push(array[i - 1]);
    } else if (array[i] === '--double-next') {
      result.push(array[i + 1]);
    } else if (array[i] === '--discard-prev') {
      result.pop(array[i]);
    } else if (array[i] === '--discard-next') {
      array.splice(i, 2);
    } else if (typeof array[i] === 'string' || 'boolean' || 'object' || 'symbol') {
      // result.push(array[i]);
      return array;
    }  
    console.log(result);
  }
  return result; 
};

console.log(transform(arr));

module.exports = {
  transform
};
