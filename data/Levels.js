import answersData from 'data/answersData';
import 'core-js/actual/array/group-by';
//  const Levels = answersData.reduce(
//   (s, a) => {
//     s.push({ level: a });
//     return s;
//   },
//   []
// );
const Levels = answersData;
const LevelTitles = answersData.map(
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

Levels.map((item, index) => {
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

const groupBySection = Levels.groupBy(
  (section) => Levels.section
);
console.log(groupBySection);

module.exports = Levels;
