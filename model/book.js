// models/book.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

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

module.exports = {
  sequelize,
  Book,
};





// const model = [
//     {
//       "title": "A Vida Invisível",
//       "author": "E. Lockhart",
//       "isbn": "9788576555005"
//     },
//     {
//       "title": "A Arte da Guerra",
//       "author": "Sun Tzu",
//       "isbn": "97885359225055"
//     },
//     {
//       "title": "O Poder do Agora",
//       "author": "Eckhart Tolle",
//       "isbn": "97885359210406"
//     },
//     {
//       "title": "O Pequeno Príncipe",
//       "author": "Antoine de Saint-Exupéry",
//       "isbn": "97885359234826"
//     },
//     {
//       "title": "O Homem Mais Rico da Babilônia",
//       "author": "George S. Clason",
//       "isbn": "97885359243053"
//     },
//     {
//       "title": "O Poder do Hábito",
//       "author": "Charles Duhigg",
//       "isbn": "97885359248007"
//     },
//     {
//       "title": "O Alquimista",
//       "author": "Paulo Coelho",
//       "isbn": "97885359254802"
//     },
//     {
//       "title": "O Leitor Oculto",
//       "author": "John Grisham",
//       "isbn": "97885359260401"
//     },
//     {
//       "title": "O Código da Vitória",
//       "author": "Lawrence Pearsall Smith",
//       "isbn": "97885359265044"
//     },
//     {
//       "title": "O Poder do Pensamento Positivo",
//       "author": "Norman Vincent Peale",
//       "isbn": "97885359270002"
//     }
//   ]


//   //Aqui é para quem for usar a aplicação, realizar o post no banco mockado