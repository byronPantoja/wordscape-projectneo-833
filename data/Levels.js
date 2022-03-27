import answersData from 'data/answersData';

const Levels = answersData.reduce(
  (s, a) => {
    s.push({ level: a });
    return s;
  },
  []
);

Levels.map((item, index) => {
  item.id = index + 1;
});

module.exports = Levels;
