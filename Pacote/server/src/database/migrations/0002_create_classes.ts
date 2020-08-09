import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tb_classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        table.integer('userId').unsigned().notNullable();

        table
            .foreign('userId')
            .references('id')
            .inTable('tb_users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('classes');
}
