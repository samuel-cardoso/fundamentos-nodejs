// Padrões de importação
// CommonJS => require
// ESModule => import/export  (foi adicionar no arquivo "package.json" um type para suportar esse tipo de importação)

// const http = require("http"); // Importando módulo de http.

import http from "node:http"; // O "node" foi colocado antes da importação desse módulo, por que ele é interno. Não foi necessário instalá-lo.

// Exemplo:
// Rota para criar um usuário (nome, email, senha). Através da "request" eu wvou conseguir ter acesso a todas informações de quem está chamando nosso servidor. O "response" é o responsável por enviar uma resposta para quem está chamando o nosso servidor.

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    // early return
    return response
      .setHeader("Content-type", "applicattion/json") // Dizendo o tipo de conteúdo que está sendo retornado. 
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: "1",
      name: "Jhon Due",
      email: "jhondoe@example.com",
    });

    return response.writeHead(201).end();
  }

  console.log(method, url);

  return response.writeHead(404).end();
});

// localhost: 3333
server.listen(3333);
