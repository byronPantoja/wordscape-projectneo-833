import levelsData from 'data/levelsData';
import 'core-js/actual/array/group-by';

const groupBySection =
  levelsData.groupBy(
    (level) => level.section
  );

let sectionsData = [];
sectionsData.push(groupBySection);

console.log(
  'Sections Data',
  sectionsData
);
module.exports = sectionsData;
// gives you all levels in a section in one array
