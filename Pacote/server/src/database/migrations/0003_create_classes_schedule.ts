import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tb_class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        table.integer('class_id').notNullable().unsigned();

        table
            .foreign('class_id')
            .references('id')
            .inTable('tb_classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('class_schedule');
}
