import Head from 'next/head';
import LevelsData from 'data/LevelsData';
import Levels from 'data/Levels';

export default function Home() {
  const list = Levels.map((l) => (
    <ul key={l.level.id}>
      <h2>{l.level.title[0]}</h2>
      <p>
        {l.level.title[1]}{' '}
        {l.level.title[2]}
      </p>
    </ul>
  ));
  return (
    <>
      <Head>
        <title>
          Wordscape833 - Answers
        </title>
      </Head>
      <main>
        <h1>Home</h1>
        <div>{list}</div>
      </main>
    </>
  );
}
