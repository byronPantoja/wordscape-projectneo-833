import answers from 'data/answers.json'

const addLevelID = (arr) => (
arr.forEach((item, index)=>{
    item.id = index+1;
  })
)

const ListAllLevels = 
answers.map((a) => a.url
  .split('/')
  .filter(element => {
  return element !== '' && element !== 'answers'})
  .join(' ')
)

const res = ListAllLevels.reduce((s,a) => {
  s.push({level: a})
  return s
}, [])

addLevelID(res);

addLevelID(answers);
console.log(answers);
console.log(res)
module.exports = ListAllLevels