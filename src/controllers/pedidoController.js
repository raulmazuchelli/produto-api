module.exports = {
  buscar,
  buscarPorId,
  cadastrar,
  alterar,
  deletar
}

const pedidos = [
  {
    id: 1,
    produto: "arroz",
    preco: 15,
    quantidade: '10'
  },
  {
    id: 2,
    produto: "feijao",
    preco: 5,
    quantidade: '10'
  },
  {
    id: 3,
    produto: "alface",
    preco: 1,
    quantidade: '10'
  },
]

function buscar(request, response) {
  let retorno = [];

  if (request.query.produto) {
    retorno = pedidos.filter(function (p) {
      if (p.produto === request.query.produto) {
        return p
      }
    })
  } else {
    retorno = pedidos
  }

  if (retorno.length === 0) {
    return response.json({ message: 'NAO ACHEI NADA' })
  }

  const result = {
    pedidos: retorno
  }

  response.json(result)
}

function buscarPorId(request, response) {
  const retorno = pedidos.find(function (p) {
    if (p.id == request.params.id) {
      return p
    }
  })

  const result = {
    pedidos: retorno
  }

  response.json(result)
}

function cadastrar(request, response) {
  const pedido = request.body

  var maxId = 0;

  for(var i = 0; i < pedidos.length; i++) {
    if(pedidos[i].id > maxId) {
      maxId = pedidos[i].id
    }
  }

  pedido.id = maxId + 1;
  pedidos.push(pedido)
  return response.json({ message: 'PEDIDO INSERIDO COM SUCESSO' })
}

function alterar(request, response) {
    const pedido = request.body

    const indexPedidosAlterar = pedidos.findIndex(function (p) {
      return p.id == request.params.id
    })

    if (indexPedidosAlterar == -1) {
      return response.json({ message: 'PEDIDO NAO ENCONTRADO' })
    }

    pedidos[indexPedidosAlterar] = {
      id: pedidos[indexPedidosAlterar].id,
      produto: pedido.produto,
      preco: pedido.preco,
      quantidade: pedido.quantidade
    };

    return response.json({ message: 'PEDIDO ALTERADO COM SUCESSO' })
}

function deletar(request, response) {
  const indexDeletar = pedidos.findIndex(function (p) {
    return p.id == request.params.id
  })

  if (indexDeletar == -1) {
    return response.json({ message: 'PEDIDO NAO ENCONTRADO' })
  }

  pedidos.splice(indexDeletar, 1);
  return response.json({ message: 'PEDIDO REMOVIDO' })
}