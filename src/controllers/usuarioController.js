const gerarId = require('../utils/gerarId')

module.exports = {
  buscar,
  buscarPorId,
  cadastrar,
  alterar,
  deletar
}
const usuarios = [
    {
      id: 1,
      login: "raul_",
      nome:  "raul neto",
      senha: '123'
    },
    {
      id: 2,
      login: "moreira_",
      nome: "thiago moreira",
      senha: '1234'
    }
]

function buscar(request, response) {
    let retorno = [];
  
    if (request.query.nome) {
      retorno = usuarios.filter(function (user) {
        if (user.nome === request.query.nome) {
          return user
        }
      })
    } else {
      retorno = usuarios
    }
  
    if (retorno.length === 0) {
      return response.json({ message: 'NAO ACHEI NADA' })
    }
  
    const result = {
      usuarios: retorno
    }
  
    response.json(result)
  }
  function buscarPorId(request, response) {
    const retorno = usuarios.find(function (user) {
      if (user.id == request.params.id) {
        return p
      }
    })
  
    const result = {
      usuarios: retorno
    }
  
    response.json(result)
  }
  
  function cadastrar(request, response) {
    const usuario = request.body
    usuario.id = gerarId(usuarios);
    usuarios.push(usuario)
    return response.json({ message: 'INSERIDO COM SUCESSO' })
  }
  
  function alterar(request, response) {
      const usuario = request.body
  
      const indexUsuariosAlterar = usuarios.findIndex(function (user) {
        return user.id == request.params.id
      })
  
      if (indexUsuariosAlterar == -1) {
        return response.json({ message: 'USUARIO NAO ENCONTRADO' })
      }
  
      usuario[indexUsuariosAlterar] = {
        id: usuario[indexUsuariosAlterar].id,
        nome: usuario.login,
        marca: usuario.nome,
        preco: usuario.senha
      };
  
      return response.json({ message: 'ALTERADO COM SUCESSO' })
  }
  
  function deletar(request, response) {
    const indexDeletar = usuarios.findIndex(function (user) {
      return user.id == request.params.id
    })
  
    if (indexDeletar == -1) {
      return response.json({ message: 'USUARIO NAO ENCONTRADO' })
    }
  
    usuarios.splice(indexDeletar, 1);
    return response.json({ message: 'USUARIO REMOVIDO' })
  }
