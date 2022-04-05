import wsLevelData from 'data/wsLevelData';
import 'core-js/actual/array/group-by';

const groupWsLevels =
  wsLevelData.groupBy(
    (wslevel) => wslevel.section
  );

let wsData = Object.entries(
  groupWsLevels
);

wsData.map((item, index) => {
  item.id = wsData[index][0]
    .split(' ')
    .shift();
});

const data = wsData;

console.log('Data', data);
module.exports = data;
