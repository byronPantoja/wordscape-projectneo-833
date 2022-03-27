import answersData from 'data/answersData';

const Levels = answersData.reduce(
  (s, a) => {
    s.push({ level: a });
    return s;
  },
  []
);



module.exports = Levels;
