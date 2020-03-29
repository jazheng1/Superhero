
exports.up = function(knex) {
  return knex.schema.table('heroes', (table) => {
    table.text('full_name');
  })
};

exports.down = function(knex) {
  return knex.schema.table('heroes', (table) => {
    table.dropColumn('full_name');
  })
};
