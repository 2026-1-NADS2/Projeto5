# 📦 Catálogo de Produtos - Sistema de Paginação

## 📖 Sobre o Projeto
Esta é uma aplicação Console desenvolvida em C# (.NET) que simula um catálogo de produtos com sistema de paginação. O objetivo principal do projeto é demonstrar a leitura e manipulação de dados a partir de um banco de dados relacional (SQLite), exibindo os itens de forma paginada para o usuário.

## 🚀 Tecnologias Utilizadas
* **Linguagem:** C# (.NET)
* **Banco de Dados:** SQLite
* **Biblioteca de Conexão:** `Microsoft.Data.Sqlite`

## 🗄️ Estrutura do Banco de Dados
O sistema consome os dados de um arquivo de banco de dados local chamado `EstruturaDBE.db`. 

A tabela principal lida pela aplicação se chama **`PRODUTO`** e possui a seguinte estrutura:

| Coluna | Tipo de Dado | Descrição |
| :--- | :--- | :--- |
| **ID** | `INTEGER` | Chave primária e identificador único do produto. |
| **PRODUTOS** | `TEXT` | Nome ou título do produto (ex: Aveia, Açaí). |
| **PRECO** | `TEXT` | Preço do produto formatado em texto (ex: R$12,00KG). |
| **INFORMACOES** | `TEXT` | Breve descrição ou benefícios do produto. |
| **TIPO** | `TEXT` | Categoria ou tipo do produto. |

## ⚙️ Funcionalidades
* **Conexão Direta:** O sistema se conecta ao arquivo `.db` embutido no projeto e realiza um `SELECT` para popular uma lista de objetos `ProdutoModel`.
* **Proteção contra Nulos:** Utiliza `IsDBNull` na leitura do banco para evitar falhas caso alguma coluna não possua informação preenchida.
* **Paginação Dinâmica:** Os itens são exibidos no console em blocos limitados (ex: 3 itens por página). O usuário pode navegar utilizando um menu interativo:
  * `1` - Sair do programa
  * `2` - Avançar para a próxima página
  * `3` - Retornar para a página anterior

## 💻 Como Executar
1. Descompacte o arquivo `.zip` do projeto.
2. Abra o arquivo com a extensão **`.sln`** (Solução) no Microsoft Visual Studio.
3. Pressione `F5` ou clique em "Iniciar" para compilar e rodar a aplicação no Console.