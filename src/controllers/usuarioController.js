const repository = require('../repository/usuarioRepository');
const md5 = require('md5');

module.exports = {
  buscar,
  buscarPorId,
  cadastrar,
  alterar,
  deletar
}

async function buscar(request, response) {
  try {
    const usuarios = await repository.buscar();
    response.json({ usuarios });
  } catch (err) {
    response.json({ message: err.message || err.stack })
  }
}

async function buscarPorId(request, response) {
  try {
    const usuario = await repository.buscarPorId(request.params.id);
    response.json({ usuario });
  } catch (err) {
    response.json({ message: err.message || err.stack })
  }
}

async function cadastrar(request, response) {
  try {
    const usuario = request.body;
    usuario.senha = md5(usuario.senha);
    await repository.cadastrar(usuario);
    response.json({ message: 'INSERIDO COM SUCESSO' })
  } catch(err) {
    response.json({ message: err.message || err.stack })
  }
}

async function alterar(request, response) {
  try {
    const usuario = request.body;
    usuario.senha = md5(usuario.senha);
    await repository.alterar(request.params.id, usuario)
    response.json({ message: 'ALTERADO COM SUCESSO' })
  } catch(err) {
    response.json({ message: err.message || err.stack })
  }
}

async function deletar(request, response) {
  try {
    await repository.deletar(request.params.id)
    response.json({ message: 'DELETADO COM SUCESSO' })
  } catch(err) {
    response.json({ message: err.message || err.stack })
  }
}
