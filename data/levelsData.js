import answersData from "data/answersData";
import "core-js/actual/array/group-by";

let levelsData = answersData;
// splits url into sections and levels
const LevelTitles = levelsData.map((a) => {
  return a.url.split("/").filter((element) => {
    return element !== "" && element !== "answers";
  });
});

// adds section, tier, tierLevel to object
levelsData = levelsData
  .map((item, index) => {
    if (item.url === "") {
      return null;
    }
    return {
      ...item,
      section: LevelTitles[index] ? LevelTitles[index][0] : "",
      tier: LevelTitles[index] ? LevelTitles[index][1] : "",
      tierLevel: LevelTitles[index] ? LevelTitles[index][2] : "",
    };
  })
  .filter((ld) => ld !== null);

// console.log("levels data", LevelTitles);

// gives you all levels one array
module.exports = levelsData;
