module.exports = {
  buscar,
  buscarPorId,
  cadastrar,
  alterar,
  deletar
}

const produtos = [
  {
    id: 1,
    nome: "monitor",
    preco: 100,
    marca: 'sony'
  },
  {
    id: 2,
    nome: 'gabinete',
    preco: 20,
    marca: 'lg'
  },
  {
    id: 3,
    nome: 'teclado',
    preco: 250,
    marca: 'hyperX'
  },
]

function buscar(request, response) {
  let retorno = [];

  if (request.query.nome) {
    retorno = produtos.filter(function (p) {
      if (p.nome === request.query.nome) {
        return p
      }
    })
  } else {
    retorno = produtos
  }

  if (retorno.length === 0) {
    return response.json({ message: 'NAO ACHEI NADA' })
  }

  const result = {
    produtos: retorno
  }

  response.json(result)
}

function buscarPorId(request, response) {
  const retorno = produtos.find(function (p) {
    if (p.id == request.params.id) {
      return p
    }
  })

  const result = {
    produtos: retorno
  }

  response.json(result)
}

function cadastrar(request, response) {
  const produto = request.body
  produtos.push(produto)
  return response.json({ message: 'INSERIDO COM SUCESSO' })
}

function alterar(request, response) {
    const produto = request.body

    const indexProdutoAlterar = produtos.findIndex(function (p) {
      return p.id == request.params.id
    })

    if (indexProdutoAlterar == -1) {
      return response.json({ message: 'PRODUTO NAO ENCONTRADO' })
    }

    produtos[indexProdutoAlterar] = {
      id: produtos[indexProdutoAlterar].id,
      nome: produto.nome,
      marca: produto.marca,
      preco: produto.preco
    };

    return response.json({ message: 'ALTERADO COM SUCESSO' })
}

function deletar(request, response) {
  const indexDeletar = produtos.findIndex(function (p) {
    return p.id == request.params.id
  })

  if (indexDeletar == -1) {
    return response.json({ message: 'PRODUTO NAO ENCONTRADO' })
  }

  produtos.splice(indexDeletar, 1);
  return response.json({ message: 'PRODUTO REMOVIDO' })
}