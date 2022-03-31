import tierData from 'data/tierData';
let wordscapeData = tierData.reduce(
  (s, a) => {
    s.push({ sectiontier: a });
    return s;
  },
  []
);

wordscapeData.map((item, index) => {
  item.id = index + 1;
});

console.log(wordscapeData);
module.exports = wordscapeData;
