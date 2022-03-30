import { useRouter } from 'next/router';
import levelsData from 'data/levelsData';
import Link from 'next/link';
import CardSections from 'components/CardSections';

const Card = () => {
  const router = useRouter();
  const id = Object.Id;
  const card = levelsData
    .filter(
      (levels) => levels.id === id
    )
    .map((level) => (
      <ul key={level.id}>
        <h1 className='mx-auto font-extrabold text-2xl my-5 uppercase'>
          {level.title}
        </h1>
      </ul>
    ));
  return (
    <div className='tc'>{card}</div>
  );
};

export default Card;
