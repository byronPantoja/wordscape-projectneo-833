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

Levels.map((item, index) => {
  item.level.title = LevelTitles[index];
});

export default LevelTitles;
