import groupBySection from 'data/groupBySection';

const sectionsData = Object.entries(
  groupBySection
);

// sectionsData.map((sections) =>
//   sections.map((s) => {
//     s.id = s[0];
//   })
// );

module.exports = sectionsData;
