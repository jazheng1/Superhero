let { Model, snakeCaseMappers } = require('objection');

class Superhero extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get tableName() {
    return 'heroes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'name',
      ],
      properties: {
        id: {type: 'integer'},
        name: {type: 'string'},
        publisher: {type: 'string'},
        alignment: {type: 'string'},
        gender: {type: 'string'},
        race: {type: 'string'},
        height: {type: 'string'},
        weight: {type: 'string'},
        eyeColor: {type: 'string'},
        hairColor: {type: 'string'},
        occupation: {type: 'string'},
        base: {type: 'string'},
        imageUrl: {type: 'string'},
        intelligence: {type: ['integer', 'null']},
        strength: {type:  ['integer', 'null']},
        speed: {type:  ['integer', 'null']},
        durability: {type: ['integer', 'null']},
        power: {type:  ['integer', 'null']},
        combat: {type: ['integer', 'null']}
      }
    }
  }

  static get relationMappings() {
    // Code here to establish relations with other classes
  }

}

module.exports = Superhero;
