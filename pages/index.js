import Head from 'next/head';
import Link from 'next/link';
import tierData from 'data/tierData';
import sectionsData from 'data/sectionsData';
import tierSectionData from 'data/tierSectionData';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Wordscape833 - Answers
        </title>
      </Head>
      <main>
        <section>
          {sectionsData.map(
            (section, i) => (
              <div
                key={i}
                className='bg-white shadow sm:rounded-lg'
              >
                <div className='px-4 py-5 sm:p-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    {section[0]}
                  </h3>

                  <div className='mt-3 text-sm'>
                    <a
                      href={`/answers/${section[0]}`}
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      {' '}
                      Go to Level
                      Section Tiers{' '}
                      <span aria-hidden='true'>
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </section>
      </main>
    </>
  );
}

console.log(tierSectionData);
