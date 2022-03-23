const jwt = require('jsonwebtoken');
const privateKey = "raul_!321@"

module.exports = {
    login
}

function login(usuario) {
    delete usuario.senha
    const token = jwt.sign(usuario, privateKey);
    return token
}