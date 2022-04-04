import Link from 'next/link';
import { useRouter } from 'next/router';
import data from 'data/data';

const sectionsPage = () => {
  const router = useRouter();
  const secPage =
    router.asPath.split('/')[2];
  return (
    <>
      <main>
        <section>
          {data
            .filter(
              (idFilter) =>
                idFilter.id === secPage
            )
            .map((ws) =>
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
                        href={`/answers/${lvl.id}`}
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

export default sectionsPage;

// const getStaticProps = ({ params }) => {
//   const data = object[params.id];
//   return {
//     props: { data },
//   };
// };
