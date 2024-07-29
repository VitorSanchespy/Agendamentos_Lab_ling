'use strict'
const Usuarios = use('App/Models/User')
class UsuarioController {
    async Usuarios ({ request, response, view }) {
        const usuarios = await Usuarios.all()
        return response.json(usuarios)
      }
    async novoUsuario ({ request, response}) {
        const data = request.only(['username','email','password'])
        const usuario = await Usuarios.create(data)
        return response.status(201).json("Usuario Criado Com Sucesso")
    }
    async buscarUsuario({request, response}){
        const { username } = await request.only(["username"]);
        const usuario_buscado = await Usuarios.query()
        .where("username", username)
        .first()
        if (!usuario_buscado) {
            return response.status(404).json({ message: "Usuário não Existe" });
          }
        return response.json(usuario_buscado)
    }
}

module.exports = UsuarioController
