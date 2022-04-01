import levelsData from "data/levelsData";
import "core-js/actual/array/group-by";

const sectionsData = levelsData.groupBy((level) => level.section);

// console.log("Sections Data", sectionsData);
module.exports = sectionsData;
// gives you all levels in a section in one array
