const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// 

function getSeason(date) {
  const season = ['winter', 'spring', 'summer', 'autumn']
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    throw new Error ('Invalid date!');
  } else if (Object.getOwnPropertyNames(date).length) {  
    throw new Error ('Invalid date!');
  } else {
    let month = date.getMonth();
    console.log(month);
    if (month >= 2 && month <=4) {
      return season[1];
    } else if (month >= 5 && month <=7) {
      return season[2];
    } else if (month >= 8 && month <=10) {
      return season[3];
    } else if (month >= 0 && month <= 11) {
      return season[0];
    }
  }
}

// console.log(getSeason(date));

module.exports = {
  getSeason
};
