const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

const members = [
        ['David Abram'],
        ['Robin Attfield'],
        'Thomas Berry',
        ['Paul R.Ehrlich'],
        'donna Haraway',
        ' BrIaN_gOodWiN  ',
        {
          0: 'Serenella Iovino'
        },
        'Erazim Kohak',
        '  val_plumwood',
      ];
console.log(members);

function createDreamTeam(members) {
  if (members === null || typeof(members) !== 'object') {
    return false;
  } else {

    let result = [];
    for (i = 0; i < members.length; i++) {
      if (typeof(members[i]) === 'string') {
        members[i] = members[i].toUpperCase();
        result.push(members[i].trim());
      }
    }
    let resultABC = result.sort();
    let name = resultABC.map((word) => word[0]).join('');
    return name;
  }
}

  
console.log(createDreamTeam(members));
module.exports = {
  createDreamTeam
};
