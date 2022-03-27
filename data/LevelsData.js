import Levels from 'data/Levels';
import LevelTitles from 'data/LevelTitles';

const LevelsData = Levels.map(
  (item, index) => {
    item.level.title =
      LevelTitles[index];
  }
);

module.exports = LevelsData;
