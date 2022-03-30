import Link from 'next/link';
const CardSections = (props) => {
  const { tier, tierLevel, id } = props;
  return (
    <div key={id}>
      <h1>
        {tier} {tierLevel}
      </h1>
    </div>
  );
};

export default CardSections;
