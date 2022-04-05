import levelsData from 'data/utils/levelsData';
import 'core-js/actual/array/group-by';

const groupBySection =
  levelsData.groupBy(
    (level) => level.section
  );

let sectionData = Object.entries(
  groupBySection
);

const sectionsData = sectionData.reduce(
  (s, a) => {
    s.push({
      section: a,
    });
    return s;
  },
  []
);
sectionsData.map((item, index) => {
  item.id = index + 1;
});

console.log(
  'Sections Data',
  sectionsData
);
module.exports = sectionsData;
// gives you all levels in a section in one array
