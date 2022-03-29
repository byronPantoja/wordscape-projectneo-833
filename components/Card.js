import Levels from 'data/Levels';

const Card = () => {
  const cardID = Levels.map((i) => (
    <Card key={i.id}>
      <h1>{i.title}</h1>
      <p>{i.answer}</p>
      <br />
      <div>
        <h3>{i.titleprev}</h3>
        <p>{i.answerprev}</p>
      </div>
      <h3>{i.titlenext}</h3>
      <p>{i.answernext}</p>
    </Card>
  ));
  return <>{cardID}</>;
};

export default Card;
