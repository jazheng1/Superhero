
exports.up = function(knex) {
  return knex.schema.createTable('heroes', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('publisher');
    table.text('alignment');
    table.text('gender');
    table.text('race');
    table.text('height');
    table.text('weight');
    table.text('eye_color');
    table.text('hair_color');
    table.text('occupation');
    table.text('base');
    table.text('image_url');
    table.integer('intelligence');
    table.integer('strength');
    table.integer('speed');
    table.integer('durability');
    table.integer('power');
    table.integer('combat');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('heroes');
};
