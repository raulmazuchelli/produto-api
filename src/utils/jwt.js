const jwt = require('jsonwebtoken');

module.exports = {
    criptografar,
    descriptografar
}

function criptografar(objeto, privateKey) {
    return jwt.sign(objeto, privateKey);
}

function descriptografar(token, privateKey) {
    return jwt.verify(token, privateKey);
}