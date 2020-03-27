let fs = require('fs');

function getHeroes(file) {
  let text = fs.readFileSync(file, 'utf-8');
  let info = JSON.parse(text);
  let arrayOfHeroes = info.results;

  for (let hero of arrayOfHeroes) {

    hero.id = Number(hero.id);
    for (let item in hero.powerstats) {
      if (hero.powerstats.hasOwnProperty(item)) {
        if (hero.powerstats[item] === "null") {
          hero.powerstats[item] = null;
        } else {
          hero.powerstats[item] = Number(hero.powerstats[item]);
        }
      }
    }
  }
  return arrayOfHeroes;
}

if (require.main === module) {
  console.log(getHeroes('../data/all-heroes.json'));
}

module.exports = getHeroes;
