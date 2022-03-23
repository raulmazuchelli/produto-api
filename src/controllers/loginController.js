const service = require('../services/loginService')
const repository = require('../repository/loginRepository')

module.exports = {
    login
}

function login(request, response) {
    const usuario = repository.login(request.body)

    if(!usuario) {
        return response.json({ message: 'USUARIO NAO ENCONTRADO' })
    }

    const token = service.login(usuario)
    return response.json({ usuario, token })
}