const repository = require('../repository/produtoRepository');

module.exports = {
  buscar,
  buscarPorId,
  cadastrar,
  alterar,
  deletar
}

async function buscar(request, response) {
  try {
    const produtos = await repository.buscar();                              // constante recebe os dados vindos do repository q acessou o banco
    response.json({ produtos });                                             // retorna a resposta em formato JSON na tela
  } catch (err) {                                                         
    response.status(500).json({ message: err.message || err.stack })         // status(XXX) define o codigo de resposta -- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  }
}

async function buscarPorId(request, response) {
  try {
    const produto = await repository.buscarPorId(request.params.id);
    response.json({ produto });
  } catch (err) {
    response.status(500).json({ message: err.message || err.stack })                     //exibe a mensagem de erro
  }
}

async function cadastrar(request, response) {
  try {
    const produto = request.body;                                           //recebe o JSON do corpo da requisição com os dados do produto do Postman
    await repository.cadastrar(produto);
    response.status(201).json({ message: 'INSERIDO COM SUCESSO' })
  } catch(err) {
    response.status(500).json({ message: err.message || err.stack })
  }
}

async function alterar(request, response) {
  try {
    const produto = request.body;
    const id = request.params.id                                          // "request.params.__" recebe o parametro da rota do URL "http://localhost:3001/produto/:id" na qual a rota é o "/:id"
    await repository.alterar(id, produto)
    response.json({ message: 'ALTERADO COM SUCESSO' })
  } catch(err) {
    response.status(500).json({ message: err.message || err.stack })
  }
}

async function deletar(request, response) {
  try {
    await repository.deletar(request.params.id)
    response.json({ message: 'DELETADO COM SUCESSO' })
  } catch(err) {
    response.status(500).json({ message: err.message || err.stack })
  }
}
