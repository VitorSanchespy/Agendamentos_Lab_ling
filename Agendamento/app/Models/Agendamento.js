'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Agendamento extends Model {
    static get fillable(){
        return ['data_hora_inicio', 'data_hora_fim']
    }
}

module.exports = Agendamento
