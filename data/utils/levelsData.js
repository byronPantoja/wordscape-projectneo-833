import answersData from 'data/utils/answersData';
import 'core-js/actual/array/group-by';

const levelsData = answersData;
// splits url into sections and levels
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

// adds section, tier, tierLevel to object
//for each item add section, what section? the section === LevelTitle[index][0]
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

console.log('levels data', levelsData);
// gives you all levels one array
module.exports = levelsData;
