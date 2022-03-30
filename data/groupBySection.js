import levelsData from 'data/levelsData';
import 'core-js/actual/array/group-by';

const groupBySection =
  levelsData.groupBy(
    (level) => level.section
  );

module.exports = groupBySection;
