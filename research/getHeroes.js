let fs = require('fs');

function getHeroes() {
  let text = fs.readFileSync('../data/all-heroes.json', 'utf-8');
  let info = JSON.parse(text);
  let arrayOfHeroes = info.results;
  return arrayOfHeroes;
}

if (require.main === module) {
  console.log(getHeroes());
}

module.exports = getHeroes;
