
exports.up = function(knex) {
  return knex.schema.createTable('heroes', (table) => {
    table.integer('id').primary();
    table.text('name').notNullable();
    table.text('publisher');
    table.text('alignment');
    table.text('gender');
    table.text('race');
    table.text('height');
    table.text('weight');
    table.text('eye-color');
    table.text('hair-color');
    table.text('occupation');
    table.text('base');
    table.text('image-url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('heroes');
};
