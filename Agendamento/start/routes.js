'use strict'
const Route = use('Route')

Route.get('/agendamentos','AgendamentoController.Agendamentos');
Route.post('/novoAgendamento','AgendamentoController.novoAgendamento');
Route.delete('/deletarAgendamento/:id','AgendamentoController.deletarAgendamento');

Route.get('/usuarios','UsuarioController.Usuarios');
Route.post('/novoUsuario', 'UsuarioController.novoUsuario');
Route.post('/buscarUsuario', 'UsuarioController.buscarUsuario');