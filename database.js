const sql = require('mssql');

const config = {
    user: 'AdminAraleve', 
    password: 'AraleveAdmin?', 
    server: 'srv-db-araleve.database.windows.net', 
    database: 'db-araleve', 
    options: {
        encrypt: true, 
        trustServerCertificate: false 
    }
};

async function conectar() {
    try {
        await sql.connect(config);
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
}

async function desconectar() {
    try {
        await sql.close();
        console.log('Conexão com o banco de dados encerrada.');
    } catch (err) {
        console.error('Erro ao desconectar do banco de dados:', err);
    }
}

module.exports = {
    conectar,
    desconectar,
    sql
};