import Head from 'next/head';
import Link from 'next/link';
import levelsData from 'data/levelsData';
import groupBySection from 'data/groupBySection';
import sectionsData from 'data/sectionsData';
export default function Home() {
  const list = sectionsData.map((l) => (
    <ul key={l[0]}>
      <h1 className='font-bold text-xl'>
        {l[0]}
      </h1>
      {l[1].map((i) => (
        <Link
          key={i.id}
          href={`/answers/${i.url}`}
        >
          <a>
            <h3>{i.title}</h3>
          </a>
        </Link>
      ))}
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
console.log(levelsData);
console.log(sectionsData);
