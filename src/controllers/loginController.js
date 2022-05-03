const service = require('../services/loginService');
const repository = require('../repository/loginRepository');
const md5 = require('md5');

module.exports = {
    login
}

async function login(request, response) {
    try {
        request.body.senha = md5(request.body.senha)
        const usuario = await repository.login(request.body)

        if (!usuario) {
            return response.status(404).json({ message: 'USUARIO NAO ENCONTRADO' })
        }

        const token = service.login(usuario)
        response.status(200).json({ usuario, token })
    } catch (err) {
        response.status(500).json({ message: err.message || err.stack })
    }
}