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

const members = ['Matt', 'Ann', 'Dmitry', 'Max']
console.log(members);

function createDreamTeam(members) {
  let result = members.sort();
  let teamName = '';
  console.log (result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] == String) {
      teamName = teamName + result[i[0]];
      console.log(teamName);
    }
  } return teamName;
}


console.log(createDreamTeam(members));
module.exports = {
  createDreamTeam
};
