const express = require('express');
const bodyParser = require('body-parser');
const { Book } = require('../model/book');

// Rota para buscar livros por título
// Importa o Sequelize e o Op
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();
router.use(bodyParser.json());

// Rota para buscar todos os livros
router.get('/books', (req, res) => {
  Book.findAll()
    .then(books => res.json(books))
    .catch(error => res.status(500).json({ error: 'Erro ao buscar os livros' }));
});

// Rota para buscar livros por ISBN
router.post('/books/byISBN', (req, res) => {
  const { isbn } = req.body;

  if (!isbn) {
    return res.status(400).json({ error: 'Parâmetro ISBN não fornecido' });
  }

  Book.findAll({
    where: {
      isbn: { [Op.like]: `%${isbn}%` },
    }
  })
    .then(books => res.json(books))
    .catch(error => res.status(500).json({ error: 'Erro ao buscar os livros' }));
});




//busca o livro pelo título
router.post('/books/byTitle', async (req, res) => {
  try {
    const { title } = req.body;
    console.log('Título recebido:', title);

    // Usa o Op.like dentro de um objeto
    const books = await Book.findAll({
      where: {
        title: {
          //PRECISA UTILIZAR O OP.LIKE SE QUISER USAR POR TERMOS APROXIMADOS
          [Op.like]: `%${title}%` // Usa aspas simples e objeto
        }
      }
    });
    console.log('Livros encontrados:', books);
    res.json(books);
  } catch (error) {
    console.error('Erro ao buscar os livros:', error);
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
});


// Rota para buscar livros por autor
router.post('/books/byAuthor', (req, res) => {
  const { author } = req.body;

  Book.findAll({ where: { author } })
    .then(books => res.json(books))
    .catch(error => res.status(500).json({ error: 'Erro ao buscar os livros' }));
});


// Rota para adicionar um livro
router.post('/books', (req, res) => {
  const { id, title, author, isbn } = req.body;

  Book.create({ id, title, author, isbn })
    .then(book => res.json(book))
    .catch(error => res.status(500).json({ error: 'Erro ao adicionar o livro' }));
});

module.exports = (router);
