import sectionsData from "data/sectionsData";

const sectionsPage = ({ data, sectionsData }) => {
  // console.log("sectionsData", sectionsData);
  return (
    <>
      <main>
        <section>
          {data?.map((section) => (
            <div key={section.id} className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {section.title}
                </h3>

                <div className="mt-3 text-sm">
                  <a
                    href={`/answers/${section.url}`}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {" "}
                    Go to Level Section Tiers{" "}
                    <span aria-hidden="true">&rarr;</span>
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

export default sectionsPage;

export const getStaticProps = ({ params }) => {
  const data = sectionsData[params.section];
  return {
    props: { data: data ?? [], sectionsData },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          section: "sunrise",
        },
      },
    ],
    fallback: true,
  };
};
