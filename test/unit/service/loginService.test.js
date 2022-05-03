const loginService = require('../../../src/services/loginService');

describe('Unit - Service - Login', function () {

    afterEach(function () {
        jest.clearAllMocks();
    })

    test('Deve retornar um token', function () {
        const usuario = { nome: 'raul' }
        const token = loginService.login(usuario)
        expect(token).not.toBeNull()
    })
})