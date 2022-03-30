import Link from 'next/link';
import CardSections from 'components/CardSections';
import tierData from 'data/tierData';

const CardListSections = () => {
  const cardComponent = tierData.map(
    (section) => (
      <ul key={section[0]}>
        <h1 className='mx-auto font-extrabold text-2xl my-5 uppercase'>
          {section[0]}
        </h1>
        {section[1].map((i) => (
          <li key={i.title}>
            <Link href={i.url}>
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

export default CardListSections;
