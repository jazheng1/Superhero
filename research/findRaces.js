let getHeroes = require('./getHeroes');

let arrayOfHeroes = getHeroes();

function findRaces() {
  const races = [];
  for (let hero of arrayOfHeroes) {
    let appearance = hero.appearance;
    if (!races.includes(appearance.race)) {
      races.push(appearance.race);
    }
  }
  return races;
}

if (require.main === module) {
  console.log(findRaces());
}

module.exports = findRaces();
