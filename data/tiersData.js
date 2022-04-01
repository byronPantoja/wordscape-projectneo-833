import levelsData from 'data/levelsData';
import 'core-js/actual/array/group-by';

const groupByTier = levelsData.groupBy(
  (level) =>
    level.section + ' ' + level.tier
);

let tiersData = [];

tiersData.push(groupByTier);

console.log('Tier Group', tiersData);
module.exports = tiersData;
// gives you all levels by tiers and section
