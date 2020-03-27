let Knex = require('knex');
let { Model } = require('objection');
let dbConfig = require('./knexfile');
let knex = Knex(dbConfig[process.env.NODE_ENV]);
Model.knex(knex);
let getHeroes = require('./research/getHeroes');
let Superhero = require('./models/Superhero');

let arrayOfHeroes = getHeroes('./data/all-heroes.json');

// SELECT id, superhero_id FROM heroes;
// superhero_id => id

async function importHeroes(heroes) {
  return await Superhero.query().insertGraph(heroes.map((hero) => {
    console.log(hero.powerstats.intelligence);
    return {
      name: hero.name,
      publisher: hero.biography.publisher,
      alignment: hero.biography.alignment,
      gender: hero.appearance.gender,
      race: hero.appearance.race,
      height: hero.appearance.height[0],
      weight: hero.appearance.weight[0],
      eyeColor: hero.appearance['eye-color'],
      hairColor: hero.appearance['hair-color'],
      occupation: hero.work.occupation,
      base: hero.work.base,
      imageUrl: hero.image.url,
      intelligence: hero.powerstats.intelligence,
      strength: hero.powerstats.strength,
      speed: hero.powerstats.speed,
      durability: hero.powerstats.durability,
      power: hero.powerstats.power,
      combat: hero.powerstats.power
    };
  }));
}

(async () => {
  await importHeroes(arrayOfHeroes);
})();
