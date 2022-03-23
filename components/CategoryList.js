import ListAllLevels from 'data/ListAllLevels'
import CategoryCards from 'components/CategoryCards'



const CategoryList = () => {



  return (
        <div>List
        {ListAllLevels.map(function(d, idx){
            return (<li key={idx}>{d}</li>)
          })}
        </div>
      );

  
}

export default CategoryList;