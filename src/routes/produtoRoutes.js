const controller = require('../controllers/produtoController')

module.exports = function (server) {
  server.get('/produtos', controller.buscar);
  server.get('/produtos/:id', controller.buscarPorId);
  server.post('/produtos', controller.cadastrar);
  server.put('/produtos/:id', controller.alterar);
  server.delete('/produtos/:id', controller.deletar);
}