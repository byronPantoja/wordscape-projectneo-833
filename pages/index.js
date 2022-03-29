import Head from 'next/head';
import Link from 'next/link';
import levelsData from 'data/levelsData';
import groupBySection from 'data/groupBySection';
import sectionsData from 'data/sectionsData';
export default function Home() {
  const list = sectionsData.map((l) => (
    <ul key={l[0]}>
      <Link
        href={`/answers/${l.section}`}
      >
        <a>
          <h2>{l[0]}</h2>
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
console.log(sectionsData);
