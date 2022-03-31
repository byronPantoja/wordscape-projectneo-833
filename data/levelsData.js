import answersData from 'data/answersData';
import 'core-js/actual/array/group-by';

const levelsData = answersData;
const LevelTitles = levelsData.map(
  (a) =>
    a.url
      .split('/')
      .filter((element) => {
        return (
          element !== '' &&
          element !== 'answers'
        );
      })
);

levelsData.map((item, index) => {
  item.section = LevelTitles[index]
    ? LevelTitles[index][0]
    : '';
  item.tier = LevelTitles[index]
    ? LevelTitles[index][1]
    : '';
  item.tierLevel = LevelTitles[index]
    ? LevelTitles[index][2]
    : '';
});

levelsData.groupBy((level) => {
  return level.section;
});
console.log(levelsData);
module.exports = levelsData;
