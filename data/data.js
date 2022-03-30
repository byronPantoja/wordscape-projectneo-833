import levelsData from 'data/levelsData';
const data = levelsData.reduce(
  (s, a) => {
    s.push({ level: a });
    return s;
  },
  []
);
console.log(data);

module.exports = data;
