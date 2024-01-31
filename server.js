const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const service = require('./service/book');

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Definição do modelo
const Book = sequelize.define('Book', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isbn: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});



// Sincroniza o modelo com o banco de dados
sequelize.sync()
  .then(() => console.log('Banco de dados sincronizado!'))
  .catch(error => console.error('Erro ao sincronizar o banco de dados:', error));

// Configuração do servidor express
const app = express();
app.use(bodyParser.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API!' });
});

// Usa os serviços
app.use(service);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
