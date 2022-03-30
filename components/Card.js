import Link from 'next/link';
const Card = (props) => {
  const {
    section,
    tier,
    tierLevel,
    id,
    answer,
  } = props;
  return (
    <div key={id}>
      <h1>
        {tier} {tierLevel}
      </h1>
    </div>
  );
};

export default Card;
