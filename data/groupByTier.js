import levelsData from 'data/levelsData';
import 'core-js/actual/array/group-by';

const groupByTier = levelsData.groupBy(
  (level) =>
    level.section + ' ' + level.tier
);

module.exports = groupByTier;
