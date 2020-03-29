
exports.up = function(knex) {
  return knex.schema.table('heroes', (table) => {
    table.text('aliases');
  })
};

exports.down = function(knex) {
  return knex.schema.table('heroes', (table) => {
    table.dropColumn('aliases');
  })
};
