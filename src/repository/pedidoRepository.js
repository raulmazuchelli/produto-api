const db = require('../config/database')            //chama o banco

module.exports = {
    buscar,
    buscarPorId,
    cadastrar,
    alterar,
    deletar
}

async function buscar() {
    const retorno = await db.query('SELECT * FROM vendas.pedido')                          
    return retorno.rows                                                                     
}

async function buscarPorId(id) {                                                            
    const retorno = await db.query(
        'SELECT * FROM vendas.pedido WHERE id = $1',
        [id]                                                                              
    )

    return retorno.rows
}

async function cadastrar(pedido) {
    await db.query(
        'INSERT INTO vendas.pedido(id_produto, id_usuario, quantidade, valor_total, data_criacao) VALUES ($1, $2, $3, $4, $5)',
        [pedido.id_produto, pedido.id_usuario, pedido.quantidade, pedido.valor_total, new Date().toISOString()]
    )
}

async function alterar(id, pedido) {
    await db.query(
        'UPDATE vendas.pedido SET id_produto = $1, quantidade = $2, valor_total = $3 where id = $4',
        [pedido.id_produto, pedido.quantidade, pedido.valor_total, id]
    )
}

async function deletar(id) {
    await db.query('DELETE FROM vendas.pedido WHERE id = $1', [id])
}