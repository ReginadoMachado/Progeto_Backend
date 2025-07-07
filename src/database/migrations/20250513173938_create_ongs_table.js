exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password_hash').notNullable();
    table.string('whatsapp');
    table.string('city');
    table.string('uf', 2);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
