const express = require('express');
const router = express.Router();
const { Book } = require('./server');
const booksService = require('./service');


// Restante do código...


module.exports = (Book) => {
  // Rota para buscar todos os livros
  router.get('/books', (req, res) => {
    Book.findAllBooks()
      .then(books => res.json(books))
      .catch(error => res.status(500).json({ error: 'Erro ao buscar os livros' }));
  });

  // Rota para buscar livros por ISBN
  router.post('/books/byISBN', (req, res) => {
    const { isbn } = req.body;
    Book.findBooksByISBN(isbn)
      .then(books => res.json(books))
      .catch(error => res.status(500).json({ error: 'Erro ao buscar os livros' }));
  });

  // Rota para buscar livros por título
  router.post('/books/byTitle', (req, res) => {
    const { title } = req.body;
    Book.findBooksByTitle(title)
      .then(books => res.json(books))
      .catch(error => res.status(500).json({ error: 'Erro ao buscar os livros' }));
  });

  // Rota para buscar livros por autor
  router.post('/books/byAuthor', (req, res) => {
    const { author } = req.body;
    Book.findBooksByAuthor(author)
      .then(books => res.json(books))
      .catch(error => res.status(500).json({ error: 'Erro ao buscar os livros' }));
  });

  // Rota para adicionar um livro
  router.post('/books', (req, res) => {
    const { id, title, author, isbn } = req.body;
    Book.createBook({ id, title, author, isbn })
      .then(book => res.json(book))
      .catch(error => {
        console.error('Erro ao adicionar o livro:', error);
        res.status(500).json({ error: 'Erro ao adicionar o livro' });
      });
  });

  router.use(booksService);


  return router;
};