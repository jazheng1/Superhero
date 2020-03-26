
function findRaces(heroesArray) {
  const races = [];
  for (let hero of heroesArray) {
    let appearance = hero.appearance;
    if (!races.includes(appearance.race)) {
      races.push(appearance.race);
    }
  }
  return races;
}

module.exports = findRaces();
