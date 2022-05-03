const loginRepository = require('../../../src/repository/loginRepository');
const db = require('../../../src/config/database');

jest.mock('pg');
jest.mock('../../../src/config/database');

describe('Unit - Repository - Login', function () {

    afterEach(function () {
        jest.clearAllMocks();
    })
    
    test('Deve executar a query', function () {
        db.query.mockImplementationOnce(function () {
            return {
                rows: []
            }
        })

        const usuario = { login: 'raul', senha: '123' };
        loginRepository.login(usuario);
        expect(db.query).toBeCalled();
    })
})