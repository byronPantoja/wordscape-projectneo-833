import Link from 'next/link';
import { useRouter } from 'next/router';
import tiersData from 'data/utils/tiersData';
import levelsData from 'data/utils/levelsData';

const Answers = () => {
  const router = useRouter();
  const levelID = router.query;

  console.log('Level ID', levelID);
  console.log(
    'levelsDataID',
    levelsData
      .filter(
        (lvlid) =>
          lvlid.id.toString() ===
          levelID.level
      )
      .map((lvl) => lvl.title)
  );
  return (
    <>
      <main>
        THE PAGE - Need to filter for
        url
        <section>
          {levelsData
            .filter(
              (lvlid) =>
                lvlid.id.toString() ===
                levelID.level
            )
            .map((lvl) => (
              <div
                key={lvl.id}
                className='bg-white shadow sm:rounded-lg'
              >
                <div className='px-4 py-5 sm:p-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    ANSWERS
                    {lvl.title}
                  </h3>
                  <div className='mt-3 text-sm'>
                    <h1>
                      {lvl.answer}
                    </h1>
                    {/* <Link
                                href={`/tiers${td.url}?id=${td.id}`}
                              >
                                <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                                  {' '}
                                  Go to
                                  Level
                                  Section
                                  Tiers{' '}
                                  <span aria-hidden='true'>
                                    &rarr;
                                  </span>
                                </a>
                              </Link> */}
                  </div>
                </div>
              </div>
            ))}
        </section>
      </main>
    </>
  );
};

export default Answers;

// const getStaticProps = ({ params }) => {
//   const data = object[params.id];
//   return {
//     props: { data },
//   };
// };
