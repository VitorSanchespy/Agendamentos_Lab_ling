'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendamentosSchema extends Schema {
  up () {
    this.create('agendamentos', (table) => {
      table.increments()
      table.timestamp('data_hora_inicio').notNullable()
      table.timestamp('data_hora_final').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('agendamentos')
  }
}

module.exports = AgendamentosSchema
