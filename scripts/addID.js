const addLevelID = (arr) => (
  arr.forEach((item, index)=>{
      item.id = index+1;
    })
  )

module.exports = addLevelID