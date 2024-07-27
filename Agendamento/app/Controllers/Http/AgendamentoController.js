'use strict'

const Agendamento = use('App/Models/Agendamento')
class AgendamentoController {
    async index ({ request, response, view }) {
        const agendamentos = await Agendamento.all()
        return response.json(agendamentos)
      }
    
      async registro ({ request, response }) {
        const data = request.only(['nome', 'email', 'data_hora_inicio', 'data_hora_fim'])
        const agendamento = await Agendamento.create(data)
        return response.status(201).json(agendamento)
      }
      async deletar ({ params, response}){
        const agendamento = await Agendamento.find(params.id);
        await agendamento.delete()  
        return response.status(201).json({ message: 'Agendamento deletado com sucesso' })
      }
      async atualizar ({ params, request, response}){
        const agendamento = await Agendamento.find(params.id);
        await agendamento.merge(request.only(['nome', 'email', 'data_hora_inicio', 'data_hora_fim'])
        )
        return response.status(201).json({ message: 'Agendamento deletado com sucesso' })
      }
}

module.exports = AgendamentoController
