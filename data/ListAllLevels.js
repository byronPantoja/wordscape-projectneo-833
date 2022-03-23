import answers from 'data/answers'


let ListAllLevels = 
answers.map((a) => a.url
  .split('/')
  .filter(element => {
  return element !== '' && element !== 'answers'})
  .join(' ')
  .toUpperCase()

)


console.log(answers)
module.exports = ListAllLevels