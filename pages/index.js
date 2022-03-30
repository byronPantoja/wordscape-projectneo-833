import Head from 'next/head';
import Link from 'next/link';
import levelsData from 'data/levelsData';
import groupBySection from 'data/groupBySection';
import sectionsData from 'data/sectionsData';
export default function Home() {
  const list = sectionsData.map((l) => (
    <ul key={l[0]}>
      <h1 className='mx-auto font-extrabold text-2xl my-5 uppercase'>
        {l[0]}
      </h1>
      {l[1].map((i) => (
        <Link key={i.id} href={i.url}>
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
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-5xl font-extrabold tracking-tight text-gray-900 mb-5'>
            Wordscape833 - Answers
          </h2>
          <div>{list}</div>
        </div>
      </main>
    </>
  );
}
console.log(levelsData);
console.log(sectionsData);
