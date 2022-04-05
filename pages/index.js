import Head from 'next/head';
import Link from 'next/link';
import data from 'data/data';

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
              Wordscape833 Sections
            </h3>
            <div className='mt-3 text-sm'>
              <Link href={`/level`}>
                <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                  {' '}
                  See all Tiers
                  <span aria-hidden='true'>
                    &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <section className='section-title'>
          {data.map((ws) => (
            <div
              key={ws.id}
              className='bg-white shadow sm:rounded-lg'
            >
              <div className='px-4 py-5 sm:p-6'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  {ws.id.toUpperCase()}
                </h3>

                <div className='mt-3 text-sm'>
                  <Link
                    href={`/level/${ws.id}`}
                  >
                    <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                      {' '}
                      Go to Level Tiers{' '}
                      <span aria-hidden='true'>
                        &rarr;
                      </span>
                    </a>
                  </Link>
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
