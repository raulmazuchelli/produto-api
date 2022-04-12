const jwt = require('../utils/jwt')
const privateKey = "raul_!321@"

function validarToken(request, response, next) {
    // if(request.path === '/login') {
    //     return next();
    // }
    
    // const token = request.headers.authorization;

    // if(!token) {
    //     return response.json({ message: 'TOKEN NAO INFORMADO' })
    // }

    // const tokenDecoded = jwt.descriptografar(token, privateKey)

    next();
}


module.exports = validarToken;