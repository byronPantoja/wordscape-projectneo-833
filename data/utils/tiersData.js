import levelsData from 'data/utils/levelsData';
import 'core-js/actual/array/group-by';

const groupByTier = levelsData.groupBy(
  (level) =>
    level.section + ' ' + level.tier
);
let tierData = Object.entries(
  groupByTier
);

tierData.map((item, index) => {
  item.id = index + 1; // adds index to tierData which will give us an id on wsLevelData
  item.section = tierData[index][0]
    .split(' ')
    .shift();
});

const tiersData = tierData;

// });

// const tiersData = [];
// tiersData.push(groupByTier);

console.log('Tier Group', tiersData);
module.exports = tiersData;
