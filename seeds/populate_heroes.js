console.log(__dirname)
let getHeroes = require('../research/getHeroes');
let arrayOfHeroes = getHeroes('../data/all-heroes.json');

let data = [];
for (let hero of arrayOfHeroes) {
  let heroData = {
    id: hero.id,
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
    imageUrl: hero.image.url
  }
  data.push(heroData);
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert(data);
    });
};
