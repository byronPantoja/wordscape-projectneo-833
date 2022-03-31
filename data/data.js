import tierData from 'data/tierData';
let data = tierData.reduce((s, a) => {
  s.push({ sectiontier: a });
  return s;
}, []);

data.map((item, index) => {
  item.id = index + 1;
});

console.log(data);
module.exports = data;
