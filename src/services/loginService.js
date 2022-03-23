const jwt = require('../utils/jwt')
const privateKey = "raul_!321@"

module.exports = {
    login
}

function login(usuario) {
    delete usuario.senha
    const token = jwt.criptografar(usuario, privateKey);
    return token
}