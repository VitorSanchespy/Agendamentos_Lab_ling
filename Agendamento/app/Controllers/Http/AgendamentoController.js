'use strict'
const Agendamentos = use('App/Models/Agendamento')
class AgendamentoController{
    async Agendamentos ({ request, response, view }) {
        const agendamentos = await Agendamentos.all()
        return response.json(agendamentos)
      }
      async novoAgendamento ({ request, response}) {
        const data = request.only(['data_hora_inicio','data_hora_fim'])
        const agendamento = await Agendamentos.create(data)
        return response.status(201).json("Agendamento Criado Com Sucesso")
      }
      async deletarAgendamento ({ params, response}) {
        const data = Agendamentos.find(params)
        await Agendamentos.delete(data)
        return response.status(201).json("Agendamento Deletado Com Sucesso")
      }

}
module.exports = AgendamentoController
