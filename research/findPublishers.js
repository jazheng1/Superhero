let getHeroes = require('./getHeroes');
let arrayOfHeroes = getHeroes();

function findPublishers() {
  const publishers = [];
  for (let hero of arrayOfHeroes) {
    let bio = hero.biography;
    if (!publishers.includes(bio.publisher)) {
      publishers.push(bio.publisher);
    }
  }
  return publishers;
}

if (require.main === module) {
  console.log(findPublishers());
}

module.exports = findPublishers();
