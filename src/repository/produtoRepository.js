const db = require('../config/database')            //chama o banco

module.exports = {                                  //exporta os metodos 
    buscar,
    buscarPorId,
    cadastrar,
    alterar,
    deletar
}

async function buscar() {
    const retorno = await db.query('SELECT id,nome,marca,preco FROM vendas.produto')                          // cria constante que ira receber o retorno do comando da query dentro do banco de dados
    return retorno.rows                                                                     // retorna as linhas da busca
}

async function buscarPorId(id) {                                                            // parametro recebe o id para realizar a busca
    const retorno = await db.query(
        'SELECT id,nome,marca,preco FROM vendas.produto WHERE id = $1',
        [id]                                                                              // o $1 indica o dado que sera subistituido pelo valor no array [id]
    )

    return retorno.rows
}
async function cadastrar(produto) {
    await db.query(
        'INSERT INTO vendas.produto(nome, preco, marca, data_criacao) VALUES ($1, $2, $3, $4)',
        [produto.nome, produto.preco, produto.marca, new Date().toISOString()]
    )
}

async function alterar(id, produto) {
    await db.query(
        'UPDATE vendas.produto SET nome = $1, preco = $2, marca = $3, data_alteracao = $4 where id = $5',
        [produto.nome, produto.preco, produto.marca, new Date().toISOString(), id]
    )
}
async function deletar(id) {
    await db.query('DELETE FROM vendas.produto WHERE id = $1', [id])
}