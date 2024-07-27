'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendamentoSchema extends Schema {
  up () {
    this.create('agendamentos', (table) => {
      table.increments()
      table.string('nome', 254).notNullable()
      table.string('email', 254).notNullable()
      table.timestamp('data_hora_inicio').notNullable()
      table.timestamp('data_hora_fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('agendamentos')
  }
}

module.exports = AgendamentoSchema
