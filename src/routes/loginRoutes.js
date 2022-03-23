const controller = require('../controllers/loginController')

module.exports = function (server) {
  server.post('/login', controller.login);
}