import Knex from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('TB_USERS',table =>{
        table.increments('id').primary()
        table.string('name',90).notNullable()
        table.string('avatar').notNullable()
        table.string('whatsapp').notNullable()
        table.string('biografia',1000).notNullable()
    })
}
export async function down(knex: Knex){
    return knex.schema.dropTable('TB_USERS')
}
