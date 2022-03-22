const controller = require('../controllers/usuarioController')

module.exports = function (server) {
  server.get('/usuario', controller.buscar);
  server.get('/usuario/:id', controller.buscarPorId);
  server.post('/usuario', controller.cadastrar);
  server.put('/usuario/:id', controller.alterar);
  server.delete('/usuario/:id', controller.deletar);
}