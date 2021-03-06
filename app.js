const express = require('express');
const autenticacao = require('./src/middlewares/autenticacao')
const server = express();
const port = 3001

server.use(express.json())
server.use(autenticacao)

require('./src/routes/produtoRoutes')(server);
require('./src/routes/pedidoRoutes')(server);
require('./src/routes/usuarioRoutes')(server);
require('./src/routes/loginRoutes')(server);

server.listen(port, () => {
  console.log(`listening on port, ${port}`)
});

module.exports = server;