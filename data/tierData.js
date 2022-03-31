import groupByTier from 'data/groupByTier';

const tierData = Object.entries(
  groupByTier
);

console.log(tierData);

module.exports = tierData;
