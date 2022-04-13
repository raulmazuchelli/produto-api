const db = require('../config/database');

module.exports = {
    login
}

async function login(usuario) {
    const retorno = await db.query('SELECT id, nome, login FROM seguranca.usuario WHERE login = $1 and senha = $2', [usuario.login, usuario.senha])
    return retorno.rows[0]
}