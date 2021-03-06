import Link from 'next/link';
import { useRouter } from 'next/router';
import data from 'data/data';

const LevelsPage = () => {
  const router = useRouter();
  const secPage =
    router.asPath.split('/')[2];
  console.log('sec', secPage);
  return (
    <>
      <main>
        <div className='bg-white shadow sm:rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Wordscape833 Tiers
            </h3>
            <div className='mt-3 text-sm'>
              <Link
                href={`/level/answers`}
              >
                <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                  {' '}
                  See all Answers
                  <span aria-hidden='true'>
                    &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <section>
          {data.map((ws) =>
            ws[1].map((lvl) => (
              <div
                key={lvl.id}
                className='bg-white shadow sm:rounded-lg'
              >
                <div className='px-4 py-5 sm:p-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    {lvl.lvlsectier[0].toUpperCase()}
                  </h3>

                  <div className='mt-3 text-sm'>
                    <Link
                      href={`/level/${ws.id}`}
                    >
                      <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                        {' '}
                        Go to Level
                        Section Tiers{' '}
                        <span aria-hidden='true'>
                          &rarr;
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default LevelsPage;

// const getStaticProps = ({ params }) => {
//   const data = object[params.id];
//   return {
//     props: { data },
//   };
// };
