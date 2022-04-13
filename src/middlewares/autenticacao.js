const req = require('express/lib/request');
const jwt = require('../utils/jwt')
const privateKey = "raul_!321@"

function validarToken(request, response, next) {
    if(request.path === '/login') {
        return next();
    }
    
    const token = request.headers.authorization;

    if(!token) {
        return response.status(401).json({ message: 'TOKEN NAO INFORMADO' })
    }

    try {
        const tokenDecoded = jwt.descriptografar(token, privateKey);
        request.user = tokenDecoded;
        next();
    } catch(err) {
        return response.status(401).json({ message: 'TOKEN INVALIDO', err: err.message || err.stack })
    }
}


module.exports = validarToken;