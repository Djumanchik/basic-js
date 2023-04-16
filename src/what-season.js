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
// || date.getDate() > 31 || (date.getMonth() === 1 && date.getDate() > 29)


function getSeason(date) {
  const season = ['winter', 'spring', 'summer', 'autumn']
  if (date instanceof Date === false ) {
    throw new Error ('Invalid date!');
  }
  if (date === undefined) {
    throw new Error ('Unable to determine the time of year!');
  }
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

// console.log(getSeason(date));

module.exports = {
  getSeason
};
