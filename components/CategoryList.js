import ListAllLevels from 'data/ListAllLevels'
import Levels from 'data/LevelsData'
import CategoryCards from 'components/CategoryCards'



const CategoryList = () => {

  const list = Levels.map((l) => (
    <li key={l.id}>{l.level}</li>
  ))


  return (
        <div>List
      {list}
        </div>
      );

  
}

export default CategoryList;