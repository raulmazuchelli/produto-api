const controller = require('../controllers/pedidoController')

module.exports = function (server) {
  server.get('/pedidos', controller.buscar);
  server.get('/pedidos/:id', controller.buscarPorId);
  server.post('/pedidos', controller.cadastrar);
  server.put('/pedidos/:id', controller.alterar);
  server.delete('/pedidos/:id', controller.deletar);
}