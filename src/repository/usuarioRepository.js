const db = require('../config/database')

module.exports = {
    buscar,
    buscarPorId,
    cadastrar,
    alterar,
    deletar
}

async function buscar() {
    const retorno = await db.query('SELECT id, nome, login FROM seguranca.usuario');
    return retorno.rows;
}

async function buscarPorId(id) {
    const retorno = await db.query('SELECT id, nome, login FROM seguranca.usuario where id = $1', [id]); // interrogacao sera subistituido pelo valor no array (id)
    return retorno.rows[0];
}

async function cadastrar(usuario) {
    await db.query(
        'INSERT INTO seguranca.usuario(nome, login, senha, data_criacao) VALUES($1, $2, $3, $4)',
        [usuario.nome, usuario.usuario, usuario.senha, new Date().toISOString()]
    );
}

async function alterar(id, usuario) {
    await db.query(
        'UPDATE seguranca.usuario SET nome = $1, senha = $2, data_alteracao = $3 where id = $4',
        [usuario.nome, usuario.senha, new Date().toISOString(), id]
    );
}

async function deletar(id) {
    await db.query('DELETE FROM seguranca.usuario WHERE id = $', [id]);
}