import Levels from 'data/Levels';

const LevelTitles = Levels.map((a) =>
  a.level.url
    .split('/')
    .filter((element) => {
      return (
        element !== '' &&
        element !== 'answers'
      );
    })
);

// Categories.map((item, index) => {
//   item.id = index + 1;
// });

export default LevelTitles;
