# README.md — Entrega da Matéria Full Stack

## Visão geral

Este projeto consiste em uma **API REST** desenvolvida com **Node.js**, **Express** e **SQLite** para o sistema **Mr.Nut / Marketplace B2B**.

Nesta entrega foi implementado o **CRUD completo da entidade `anuncios`**, atendendo aos requisitos da disciplina de Full Stack:

- API rodando com comando padrão
- CRUD completo de uma entidade principal
- Validação básica
- Respostas HTTP corretas
- Integração com banco de dados SQLite

---

## Tecnologias utilizadas

- **Node.js**
- **Express**
- **SQLite**
- **Insomnia / Thunder Client / Postman** para testes de rota

---

## O que precisa instalar

### 1. Instalar o Node.js
Baixe e instale o Node.js no computador.

Depois da instalação, confira no terminal:

```bash
node -v
npm -v
```

Se aparecer a versão, está instalado corretamente.

---

### 2. Instalar as dependências do projeto

Abra o terminal na pasta do projeto e execute:

```bash
npm install express sqlite3
```

Isso irá instalar:

- `express` → responsável pelo servidor e rotas da API
- `sqlite3` → responsável pela conexão com o banco de dados SQLite

---

## Como executar o projeto

Na pasta do projeto, execute:

```bash
node app.js
```

ou, se o `package.json` estiver com script configurado:

```bash
npm start
```

Se tudo estiver correto, o terminal mostrará algo semelhante a:

```bash
Banco conectado
Servidor rodando em http://localhost:3000
```

---

## Estrutura básica do projeto

```text
backend/
├── app.js
├── db.js
├── package.json
├── schema.sql
└── routes/
    └── anuncios.js
```

---

## Explicação dos arquivos

### `app.js`
É o arquivo principal da aplicação.

Funções principais:
- iniciar o servidor com Express
- ativar leitura de JSON com `express.json()`
- registrar as rotas da API
- definir a porta da aplicação

Exemplo do papel dele:
- recebe a aplicação
- liga as rotas
- sobe o servidor em `localhost:3000`

---

### `db.js`
É o arquivo responsável pela conexão com o banco SQLite.

Funções principais:
- abrir o arquivo `.db`
- conectar no banco de dados
- exportar a conexão para ser usada nas rotas

Em resumo:
> esse arquivo faz a ponte entre a API e o banco.

---

### `routes/anuncios.js`
É o arquivo que contém as rotas da entidade principal da entrega: **anúncios**.

Nele estão os endpoints:

- `GET /anuncios` → listar todos
- `GET /anuncios/:id` → buscar por id
- `POST /anuncios` → criar
- `PUT /anuncios/:id` → atualizar
- `DELETE /anuncios/:id` → remover

Também é nesse arquivo que foram adicionados:
- validações básicas
- tratamento de erros
- respostas com status HTTP adequados

---

### `schema.sql`
Arquivo SQL entregue para documentar a criação da tabela principal usada no CRUD.

Ele serve como apoio da entrega e documentação da estrutura da entidade principal.

---

### `package.json`
Arquivo de configuração do projeto Node.js.

Ele registra:
- nome do projeto
- versão
- dependências
- scripts para execução

Exemplo de script:
```json
"scripts": {
  "start": "node app.js"
}
```

---

## Explicação da lógica das rotas

### 1. `GET /anuncios`
Retorna todos os anúncios cadastrados no banco.

Objetivo:
- listar todos os registros da tabela `anuncios`

Resposta esperada:
- `200 OK`

---

### 2. `GET /anuncios/:id`
Busca apenas um anúncio pelo identificador.

Objetivo:
- consultar um registro específico

Respostas possíveis:
- `200 OK` se encontrar
- `404 Not Found` se não existir

---

### 3. `POST /anuncios`
Cria um novo anúncio.

Campos enviados no body:
- `id_fornecedor`
- `id_categoria`
- `titulo`
- `descricao`
- `preco`

Validação:
- se algum campo obrigatório não for enviado, a API retorna `400 Bad Request`

Resposta esperada:
- `201 Created`

---

### 4. `PUT /anuncios/:id`
Atualiza um anúncio existente.

Objetivo:
- alterar dados de um anúncio já cadastrado

Respostas possíveis:
- `200 OK` se atualizar com sucesso
- `404 Not Found` se o anúncio não existir

---

### 5. `DELETE /anuncios/:id`
Remove um anúncio do banco.

Objetivo:
- excluir um anúncio pelo ID

Respostas possíveis:
- `200 OK` se remover
- `404 Not Found` se não existir

---

## Tratamento de erros

Foi utilizado:

- `try/catch` para erros gerais da aplicação
- `if (err)` dentro dos callbacks do SQLite para erros do banco de dados

Exemplos de status utilizados:
- `200` → sucesso
- `201` → criado com sucesso
- `400` → erro de validação
- `404` → recurso não encontrado
- `500` → erro interno do servidor

---

## Exemplo de teste no Insomnia / Postman

### Criar anúncio
**POST** `http://localhost:3000/anuncios`

```json
{
  "id_fornecedor": 1,
  "id_categoria": 1,
  "titulo": "Castanha de Caju Premium",
  "descricao": "Pacote de 1kg direto do fornecedor",
  "preco": 49.9
}
```

### Buscar todos
**GET** `http://localhost:3000/anuncios`

### Buscar por ID
**GET** `http://localhost:3000/anuncios/1`

### Atualizar
**PUT** `http://localhost:3000/anuncios/1`

```json
{
  "titulo": "Castanha Atualizada",
  "descricao": "Produto atualizado",
  "preco": 79.9
}
```

### Deletar
**DELETE** `http://localhost:3000/anuncios/1`

---

## Observações finais

Esta entrega foi desenvolvida com foco nos requisitos da disciplina de **Full Stack**, priorizando:

- funcionamento da API
- CRUD completo
- integração com banco
- validação
- organização básica do projeto

A modelagem orientada a objetos mais avançada não foi priorizada nesta etapa, pois o foco da matéria é a construção funcional da API e sua integração com o banco de dados.

---

## Conclusão

O projeto entregue implementa uma API REST funcional para a entidade `anuncios`, utilizando **Node.js**, **Express** e **SQLite**, com operações completas de cadastro, consulta, atualização e remoção, além de validações e tratamento de erros adequados.
