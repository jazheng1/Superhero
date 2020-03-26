let getHeroes = require('./getHeroes');
let arrayOfHeroes = getHeroes();

function findBases() {
  const bases = [];
  for (let hero of arrayOfHeroes) {
    let work = hero.work;
    if (!bases.includes(work.base)) {
      bases.push(work.base);
    }
  }
  return bases;
}

if (require.main === module) {
  console.log(findBases());
}

module.exports = findBases;
