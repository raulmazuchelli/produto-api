const repository = require('../repository/pedidoRepository');

module.exports = {
  buscar,
  buscarPorId,
  cadastrar,
  alterar,
  deletar
}

async function buscar(request, response) {
  try {
    const pedidos = await repository.buscar();                              // constante recebe os dados vindos do repository q acessou o banco
    response.json({ pedidos });                                             // retorna a resposta em formato JSON na tela
  } catch (err) {                                                         
    response.status(500).json({ message: err.message || err.stack })         // status(XXX) define o codigo de resposta -- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  }
}

async function buscarPorId(request, response) {
  try {
    const pedido = await repository.buscarPorId(request.params.id);
    response.json({ pedido });
  } catch (err) {
    response.status(500).json({ message: err.message || err.stack })                     //exibe a mensagem de erro
  }
}

async function cadastrar(request, response) {
  try {
    const pedido = request.body;                                           //recebe o JSON do corpo da requisição com os dados do produto do Postman
    await repository.cadastrar(pedido);
    response.status(201).json({ message: 'PEDIDO ADICIONADO COM SUCESSO' })
  } catch(err) {
    response.status(500).json({ message: err.message || err.stack })
  }
}

async function alterar(request, response) {
  try {
    const produto = request.body;
    const id = request.params.id                                          // "request.params.__" recebe o parametro da rota do URL "http://localhost:3001/produto/:id" na qual a rota é o "/:id"
    await repository.alterar(id, produto)
    response.json({ message: 'PEDIDO ALTERADO COM SUCESSO' })
  } catch(err) {
    response.status(500).json({ message: err.message || err.stack })
  }
}

async function deletar(request, response) {
  try {
    await repository.deletar(request.params.id)
    response.json({ message: 'PEDIDO DELETADO COM SUCESSO' })
  } catch(err) {
    response.status(500).json({ message: err.message || err.stack })
  }
}