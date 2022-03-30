import Link from 'next/link';

import Card from 'components/Card';
import sectionsData from 'data/sectionsData';

const CardList = () => {
  const cardComponent =
    sectionsData.map((section) => (
      <ul key={section[0]}>
        <h1 className='mx-auto font-extrabold text-2xl my-5 uppercase'>
          {section[0]}
        </h1>
        {section[1].map((i) => (
          <Card
            key={i.id}
            section={i.section}
            tier={i.tier}
            tierLevel={i.tierLevel}
          />
        ))}
      </ul>
    ));
  return (
    <div className='tc'>
      {cardComponent}
    </div>
  );
};

export default CardList;
