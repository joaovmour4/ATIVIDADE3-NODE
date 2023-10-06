const { Client } = require('pg');
const fs = require('fs');

const connectionString = 'postgresql://postgres:password@localhost:5432/atv3-db';
const client = new Client({
  connectionString: connectionString,
});

// Conectar ao banco de dados
client.connect();

// Ler o conteúdo do arquivo SQL
const sqlFilePath = './services/database.sql';
const sqlQuery = fs.readFileSync(sqlFilePath, 'utf8');

// Executar o comando SQL
client.query(sqlQuery, (err, result) => {
  if (err) {
    console.error('Erro ao executar o comando SQL:', err);
  } else {
    console.log('Resultado:', result.rows);
  }

  // Fechar a conexão com o banco de dados
  client.end();
});
