# Documentação da Aplicação

## Visão Geral

Esta aplicação Node.js oferece uma API para gerenciar informações sobre livros. Ela inclui operações para buscar livros por diferentes critérios, adicionar novos livros e listar todos os livros existentes.

## Configuração do Banco de Dados

A aplicação utiliza o banco de dados SQLite e Sequelize para armazenar informações sobre os livros. O modelo do livro está definido com os seguintes campos:

- **id:** Identificador único do livro.
- **title:** Título do livro.
- **author:** Autor do livro.
- **isbn:** Número de identificação único do livro.

## Inicialização do Banco de Dados

Ao iniciar a aplicação, o Sequelize sincroniza o modelo do livro com o banco de dados. O arquivo de configuração do Sequelize está localizado em `./database.sqlite`.

## Rotas da API

### 1. Rota de Boas-vindas

- **Rota:** `/`
- **Método:** GET
- **Descrição:** Retorna uma mensagem de boas-vindas à API.

### 2. Rota para Buscar Livros

#### 2.1 Buscar Todos os Livros

- **Rota:** `/books`
- **Método:** GET
- **Descrição:** Retorna todos os livros cadastrados.
- **Parâmetros de Resposta:**
  - `id`: Identificador único do livro.
  - `title`: Título do livro.
  - `author`: Autor do livro.
  - `isbn`: Número de identificação único do livro.

#### 2.2 Buscar Livros por ISBN

- **Rota:** `/books/byISBN`
- **Método:** POST
- **Descrição:** Retorna livros que correspondem ao ISBN fornecido.
- **Parâmetros de Requisição:**
  - `isbn`: Número de identificação único do livro.

#### 2.3 Buscar Livros por Título

- **Rota:** `/books/byTitle`
- **Método:** POST
- **Descrição:** Retorna livros que correspondem ao título fornecido.
- **Parâmetros de Requisição:**
  - `title`: Título do livro.

#### 2.4 Buscar Livros por Autor

- **Rota:** `/books/byAuthor`
- **Método:** POST
- **Descrição:** Retorna livros que correspondem ao autor fornecido.
- **Parâmetros de Requisição:**
  - `author`: Autor do livro.

### 3. Rota para Adicionar um Livro

- **Rota:** `/books`
- **Método:** POST
- **Descrição:** Adiciona um novo livro ao banco de dados.
- **Parâmetros de Requisição:**
  - `id`: Identificador único do livro.
  - `title`: Título do livro.
  - `author`: Autor do livro.
  - `isbn`: Número de identificação único do livro.

## Executando a Aplicação

1. Instale as dependências:
   ```bash
   npm install




## Inicie a aplicação com npm start

A aplicação estará disponível em http://localhost:3000.

Dados Mockados
A aplicação fornece um conjunto inicial de dados mockados que podem ser usados para realizar POST no banco de dados. Estes dados estão presentes no código-fonte.