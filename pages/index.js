import Head from 'next/head';
import levelsData from 'data/levelsData';
import tierData from 'data/tierData';
import sectionsData from 'data/sectionsData';
import CardListSections from 'components/CardListSections';
export default function Home() {
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
          <CardListSections />
        </div>
      </main>
    </>
  );
}
