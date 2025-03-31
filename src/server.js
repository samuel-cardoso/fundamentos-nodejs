// Padrões de importação
// CommonJS => require
// ESModule => import/export  (foi adicionar no arquivo "package.json" um type para suportar esse tipo de importação)

// const http = require("http"); // Importando módulo de http.

import http from "node:http"; // O "node" foi colocado antes da importação desse módulo, por que ele é interno. Não foi necessário instalá-lo.

// Exemplo:
// Rota para criar um usuário (nome, email, senha). Através da "request" eu vou conseguir ter acesso a todas informações de quem está chamando nosso servidor. O "response" é o responsável por enviar uma resposta para quem está chamando o nosso servidor.

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    // early return
    return response.end("Listagem de Usuários");
  }

  if (method === "POST" && url === "/users") {
    return response.end("Criação de usuário");
  }

  console.log(method, url);

  return response.end("Hello World");
});

// localhost: 3333
server.listen(3333);
