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

// const arr = { 'foo': 'bar' };
// console.log (arr);
// console.log(typeof arr);

function transform(arr) {
  let result = [];
  if (typeof arr !== 'object' || typeof arr === 'undefined') {  // проверяем массив на соответсвие
  throw new Error ("'arr' parameter must be an instance of the Array!");
  } else if (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next') { // удаляем оконечные инстуркции
    arr.splice(1, 1); 
  } else if (arr[0] === '--double-prev' || arr[0] === '--discard-prev') { // удаляем оконечные инстуркции
    arr.splice(0, 1);
  } else {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === '--double-prev') {
        result.push(arr[i - 1]);
        arr.splice(i, 1);
      }
      if (arr[i] === '--double-next') {
        result.push(arr[i + 1]);
        arr.splice(i, 1);
      }
      if (arr[i] === '--discard-prev') {
        result.pop(arr[i]);
        arr.splice(i, 1);
      }
      if (arr[i] === '--discard-next') {
        arr.splice(i, 2);
      }
        result.push(arr[i]);
        console.log(result);
      }
    return result; 
  }
};

// console.log(transform(arr));

module.exports = {
  transform
};
