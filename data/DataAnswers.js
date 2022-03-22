import answers from 'data/answers.json'


const dataAnswers = 
answers.map((a) => a.url
  .split('/')
  .filter(element => {
  return element !== '' && element !== 'answers'})
  .join(' ')
  .toUpperCase()
)


module.exports = dataAnswers