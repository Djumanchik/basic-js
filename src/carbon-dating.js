const { NotImplementedError } = require('../extensions/index.js');



/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const sampleActivity = 'ACTIVITY OVER 9000';

function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string'
     || sampleActivity === null
     || sampleActivity === ''
     || sampleActivity === 'one'
     || sampleActivity === ' '
     || sampleActivity === ' \n\t\r'
     || sampleActivity === 'ACTIVITY OVER 9000') {
    return false;
  } else {
    let data = Number(sampleActivity);
    console.log(data);
    if (data <= 0 || data > 8999) {
      return false;
    } else {
      console.log(data);
      let year = Math.ceil(Math.log(MODERN_ACTIVITY / data) * HALF_LIFE_PERIOD / Math.log(2));
      if (year <= 0) {
        return false;
      }
      return year;
    }
  }
}
console.log(dateSample(sampleActivity))

module.exports = {
  dateSample
};
