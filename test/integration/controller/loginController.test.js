const loginController = require('../../../src/controllers/loginController');
const loginRepository = require('../../../src/repository/loginRepository');

jest.mock('../../../src/repository/loginRepository');
jest.mock('pg');

describe('Integration - Controller - Login', function () {

    afterEach(function () {
        jest.clearAllMocks();
    })

    const response = {
        status: jest.fn().mockImplementation(function() {
            return {
                json: jest.fn()
            }
        }),
    };

    test('Deve retornar 200 quando usuario for valido', async function () {
        const request = {
            body: { usuario: 'raul', senha: '123' }
        };

        const usuario = { nome: 'Raul' };

        loginRepository.login.mockImplementationOnce(function () {
            return usuario;
        })

        await loginController.login(request, response);

        expect(response.status).toBeCalledWith(200)
    })

    test('Deve retornar 404 quando usuario for invalido', async function () {
        const request = {
            body: { usuario: 'xxx', senha: 'xxx' }
        };

        loginRepository.login.mockImplementationOnce(function () {
            return null;
        })

        await loginController.login(request, response);

        expect(response.status).toBeCalledWith(404)
    })

    test('Deve retornar 500 quando ocorrer um erro - sem a stack do erro', async function () {
        const request = {
            body: { usuario: 'xxx', senha: 'xxx' }
        };

        loginRepository.login.mockImplementationOnce(function () {
            throw new Error('deu erro')
        })

        await loginController.login(request, response);

        expect(response.status).toBeCalledWith(500)
    })

    test('Deve retornar 500 quando ocorrer um erro - com a stack do erro', async function () {
        const request = {
            body: { usuario: 'xxx', senha: 'xxx' }
        };

        loginRepository.login.mockImplementationOnce(function () {
            var err = new Error()
            err.stack = 'XXX'
            throw err
        })

        await loginController.login(request, response);

        expect(response.status).toBeCalledWith(500)
    })
})