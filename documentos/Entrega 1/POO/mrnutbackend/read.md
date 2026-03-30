# Projeto POO — Sistema Mr.Nut

## Descrição

Este projeto consiste no desenvolvimento de um sistema backend utilizando **Programação Orientada a Objetos (POO)** com JavaScript e banco de dados SQLite.

O sistema simula um marketplace B2B, onde existem três tipos de usuários:
- Comprador
- Fornecedor
- Administrador

---

## Tecnologias utilizadas

- Node.js
- JavaScript (POO)
- SQLite

---

## Estrutura do projeto

- `app.js` → inicia o servidor
- `SistemaMrNut.js` → classe principal do sistema
- `Database.js` → conexão com o banco
- `models/` → classes do sistema (Usuario, Fornecedor, Administrador, Anuncio)
- `services/` → regras de negócio
- `routes/` → rotas da API

---

## Conceitos de POO aplicados

- **Encapsulamento** → cada classe tem sua responsabilidade
- **Herança** → Fornecedor e Administrador herdam de Usuario
- **Abstração** → entidades do sistema representadas por classes

---

## Funcionalidades principais

- Cadastro de usuários
- Cadastro de fornecedores
- Criação de anúncios
- Aprovação e reprovação de anúncios
- Consulta de anúncios

---

## Como executar

1. Instalar dependências:
```bash
npm install