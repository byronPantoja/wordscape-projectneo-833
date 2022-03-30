import Link from 'next/link';
import CardSections from 'components/CardSections';
import tierData from 'data/tierData';
import sectionsData from 'data/sectionsData';
import levelsData from 'data/levelsData';
import data from 'data/data';

const CardListSections = () => {
  const cardComponent = tierData.map(
    (section) => (
      <ul key={section[0]}>
        <h1 className='mx-auto font-extrabold text-2xl my-5 uppercase'>
          {section[0]}
        </h1>
        {section[1].map((i) => (
          <li key={i.id}>
            <Link
              href={i.url}
              as={i.url}
            >
              <a>
                <CardSections
                  key={i.id}
                  section={i.section}
                  tier={i.tier}
                  tierLevel={
                    i.tierLevel
                  }
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
  return (
    <div className='tc'>
      {cardComponent}
    </div>
  );
};

console.log(levelsData);
console.log(sectionsData);
console.log(tierData);
console.log(data);
export default CardListSections;
