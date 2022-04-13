const pg = require('pg')

let client = null;

function init() {
    if (!client) {
        client = new pg.Client({
            user: 'postgres',
            host: 'localhost',
            database: 'produtos',
            password: '123',
            port: 5432,
        })

    }

    client.connect();
}

init()

module.exports = client