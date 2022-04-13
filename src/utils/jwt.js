const jwt = require('jsonwebtoken');

module.exports = {
    criptografar,
    descriptografar
}

function criptografar(objeto, privateKey) {
    return jwt.sign(objeto, privateKey, { expiresIn: '1h' });
}

function descriptografar(token, privateKey) {
    return jwt.verify(token, privateKey);
}