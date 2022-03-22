import dataAnswers from 'data/DataAnswers'
import CategoryCards from 'components/CategoryCards'



const CategoryList = () => {



  return (
        <div>
        {dataAnswers.map(function(d, idx){
           return (<li key={idx}>{d}</li>)
         })}
        </div>
      );

  
}

export default CategoryList;