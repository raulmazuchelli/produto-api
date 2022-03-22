const express = require('express');
const server = express();
const port = 3001

server.use(express.json())

require('./src/routes/produtoRoutes')(server);
require('./src/routes/pedidoRoutes')(server);
require('./src/routes/usuarioRoutes')(server);

server.listen(port, () => {
  console.log(`listening on port, ${port}`)
});

module.exports = server;