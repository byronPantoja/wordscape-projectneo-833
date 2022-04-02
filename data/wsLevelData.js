import tiersData from 'data/utils/tiersData';
import sectionsData from 'data/utils/sectionsData';

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
  item.id = index + 1;
});
console.log('Level Data', wsLevelData);
module.exports = wsLevelData;
