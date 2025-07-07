exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.uuid('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('category');
    table.uuid('ong_id').references('id').inTable('ongs').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
