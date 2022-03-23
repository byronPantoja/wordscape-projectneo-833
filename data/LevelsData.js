import ListAllLevels from 'data/ListAllLevels'
import addLevelID from 'scripts/addID';


const Levels = ListAllLevels.reduce((s,a) => {
  s.push({level: a})
  return s
}, [])

addLevelID(Levels);
console.log(Levels)
module.exports = Levels;