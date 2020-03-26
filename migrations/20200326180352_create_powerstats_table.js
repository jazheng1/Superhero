
exports.up = function(knex) {
  return knex.schema.createTable('powerstats', (table) => {
    table.increments('id').primary();
    table.integer('hero_id').references('heroes.id');
    table.integer('intelligence');
    table.integer('strength');
    table.integer('speed');
    table.integer('durability');
    table.integer('power');
    table.integer('combat');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('powerstats');
};
