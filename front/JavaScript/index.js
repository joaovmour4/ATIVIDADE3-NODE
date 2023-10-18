const axios = require('axios');

const apiUrl = 'http://localhost:3000';

// Rota para listar todos os bancos
const listaDosBancos = '/bancos';

// Fazer uma chamada à API para listar todos os bancos
axios.get(apiUrl + listaDosBancos)
  .then((response) => {
    console.log('Lista de Bancos:');
    response.data.message.forEach((banco) => {
      console.log(`ID: ${banco.id}, Nome: ${banco.name}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao fazer a chamada à API: ', error);
  });
