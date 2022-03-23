const usuarioController = require('../controllers/usuarioController')
const usuarios = usuarioController.usuarios

module.exports = {
    login
}

function login(usuario) {
    const result = usuarios.find(function (user) {
        if(user.login === usuario.login && user.senha === usuario.senha) {
            return user
        }
    })

    return result;
}