import Head from 'next/head';
import Link from 'next/link';
import Levels from 'data/Levels';

export default function Home() {
  const list = Levels.map((l) => (
    <ul key={l.id}>
      <Link href={`/answers/${l.id}/`}>
        <a>
          <h2>{l.title}</h2>
        </a>
      </Link>
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
