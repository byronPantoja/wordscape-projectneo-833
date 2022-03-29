import levelsData from 'data/levelsData';
import 'core-js/actual/array/group-by';

const groupBySection =
  levelsData.groupBy((level) => {
    return level.section;
  });

module.exports = groupBySection;
