// Streams ->

// process.stdin.pipe(process.stdout); // O pipe é uma forma de encaminhar, o que basicamente acontece aqui é que, ao receber os dados no terminal com o "stdin" encaminhe esses dados para uma saída, o stdout.

// stdin -> Strem de leitura
// stdout -> Stream de escrita

import { Readable } from "node:stream";

class OneToHundreadStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null); // Utilizamos o push para a stream fornecer informações para quem estiver consumindo ela.
      } else {
        const buf = Buffer.from(String(i)); // O chunk não pode estar em um formato primitivo, string, number, booleano e etc.. ele precisa ser um buffer.
        this.push(buf);
      }
    }, 1000);
  }
}

new OneToHundreadStream().pipe(process.stdout);

// Já estou conseguindo a cada 1 segundo trabalhar com os dados retornados de dentro da stream. Consigo mostrar os dados de dentro da minha stream, antes mesmo dela estar completa.