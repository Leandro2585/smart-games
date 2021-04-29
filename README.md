<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Leandro2585/smart-games?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Leandro2585/smart-games">

  <a href="https://github.com/Leandro2585/smart-games/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Leandro2585/smart-games">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Leandro2585/smart-games/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Leandro2585/smart-games?style=social">
  </a>

  <a href="https://github.com.br/Leandro2585">
    <img alt="Feito pela Leandro" src="https://img.shields.io/badge/feito%20por-Leandro-%237519C1">
  </a>

</p>

<h4 align="center">
	🚧  Smart Games - Em Desenvolvimento 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

Um marketplace de jogos, em que seus usuários possam efetuar compras e catalogar os mais variados produtos de uma loja de jogos

---

## 🚀 Como executar o projeto

Esse template foi desenvolvido com Typescript, portanto certifique-se de que é usual para o seu contexto antes de fazer a instalação.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Server

```bash

# Clone este repositório
$ git clone git@github.com:Leandro2585/smart-games.git

# Vá para a pasta server
$ cd smart-games/server

# Instale as dependências
$ npm install

# Inicie um container do docker
$ sudo docker run --name smartgames_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Execute as migrations da aplicação
$ npm run typeorm migration:run

# Você também vai precisar rodar algumas seeds
$ npm run seeds

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# Para teste das rotas você pode utilizar o arquivo InsomniaTeste disponível nesse repositório

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/Leandro2585/smart-games#server-nodejs--typescript)**Smart Games**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**

> Veja o arquivo  [package.json](https://github.com/Leandro2585/smart-games/blob/master/server/package.json)


#### [](https://github.com/Leandro2585/smart-games#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Teste do Servidor:  **[Insomnia](https://insomnia.rest/)**
---


## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

##  Autor

<a href="https://github.com/Leandro2585">
 <img src="https://avatars.githubusercontent.com/u/49343139?v=4" width="60px"/>
 <br />
 <sub><b>Leandro Real</b></sub></a> <a href="https://github.com/Leandro2585" title="Leandro">🚀</a>
 <br />

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Leandro Real 👋🏽 [Entre em contato!](https://www.linkedin.com/in/leandro-r-434b811a5/)

---

##  Versões do README

[Português 🇧🇷](./README-pt.md)
