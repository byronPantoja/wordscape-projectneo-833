import tiersData from 'data/utils/tiersData';

import 'core-js/actual/array/group-by';

const wsLevelData = tiersData.reduce(
  (s, a) => {
    s.push({
      lvlsectier: a,
    });
    return s;
  },
  []
);

wsLevelData.map((item, index) => {
  item.section = tiersData[index]
    ? tiersData[index][0]
    : '';
});

wsLevelData.map((item, index) => {
  item.id = index + 1;
  item.section = tiersData[index][0]
    .split(' ')
    .shift();
});

console.log('Level Data', wsLevelData);
module.exports = wsLevelData;
