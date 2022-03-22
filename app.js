const express = require('express');
const server = express();
const port = 3001

server.use(express.json())

require('./src/routes/produtoRoutes')(server);

server.listen(port, () => {
  console.log(`listening on port, ${port}`)
});

module.exports = server;