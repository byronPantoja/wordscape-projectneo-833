import tierData from 'data/tierData';
let tierSectionData = tierData.reduce(
  (s, a) => {
    s.push({ sectiontier: a });
    return s;
  },
  []
);

tierSectionData.map((item, index) => {
  item.id = index + 1;
});

console.log(tierSectionData);
module.exports = tierSectionData;
