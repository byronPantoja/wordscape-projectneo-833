import wsLevelData from 'data/wsLevelData';

const sectionsPage = () => (
  <>
    <main>
      <section>
        {wsLevelData.map((ws) => (
          <div
            key={ws.id}
            className='bg-white shadow sm:rounded-lg'
          >
            <div className='px-4 py-5 sm:p-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                {ws.lvlsectier[0]}
              </h3>

              <div className='mt-3 text-sm'>
                <a
                  href={`/answers/${ws.lvlsectier[0]}`}
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

export default sectionsPage;

// const getStaticProps = ({ params }) => {
//   const data = object[params.id];
//   return {
//     props: { data },
//   };
// };
