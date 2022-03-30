import Link from 'next/link';
const CardSections = (props) => {
  const { tier, tierLevel, id } = props;
  return (
    <div key={id}>
      <h1 className='uppercase'>
        {tier} {tierLevel}
      </h1>
    </div>
  );
};

export default CardSections;
