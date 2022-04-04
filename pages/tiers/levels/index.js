import Link from 'next/link';
import { useRouter } from 'next/router';
import tiersData from 'data/utils/tiersData';

const index = () => {
  const router = useRouter();
  const secPage =
    router.asPath.split('/')[2];
  return (
    <>
      <main>
        <div className='bg-white shadow sm:rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Wordscape833 Levels
            </h3>
            <div className='mt-3 text-sm'>
              <Link href={`/`}>
                <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                  {' '}
                  Go back
                  <span aria-hidden='true'>
                    &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <section>
          {tiersData.map((ws) =>
            ws[1].map((lvl) => (
              <div
                key={lvl.id}
                className='bg-white shadow sm:rounded-lg'
              >
                <div className='px-4 py-5 sm:p-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    {lvl.section.toUpperCase()}{' '}
                    {lvl.tier.toUpperCase()}{' '}
                    {lvl.tierLevel.toUpperCase()}
                  </h3>

                  <div className='mt-3 text-sm'>
                    <Link
                      href={`${lvl.url}`}
                    >
                      <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                        {' '}
                        Go to Level
                        Section Answer{' '}
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

export default index;

// const getStaticProps = ({ params }) => {
//   const data = object[params.id];
//   return {
//     props: { data },
//   };
// };
