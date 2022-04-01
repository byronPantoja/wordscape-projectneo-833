import Head from 'next/head';
import Link from 'next/link';
import levelsData from 'data/levelsData';
import tiersData from 'data/tiersData';
import sectionsData from 'data/sectionsData';
const Home = () => {
  return (
    <>
      <Head>
        <title>Wordscape833</title>
      </Head>
      <main>
        <div className='bg-white shadow sm:rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Wordscape833
            </h3>
          </div>
        </div>
        <section>
          {levelsData.map((lvl) => (
            <div
              key={lvl.id}
              className='bg-white shadow sm:rounded-lg'
            >
              <div className='px-4 py-5 sm:p-6'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  {lvl.section}
                </h3>

                <div className='mt-3 text-sm'>
                  <a
                    href={`/answers/${lvl.section}`}
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    {' '}
                    Go to Level Section
                    Tiers{' '}
                    <span aria-hidden='true'>
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
