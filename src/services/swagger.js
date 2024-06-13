const swaggerAutogen = require("swagger-autogen")("pt-br");

const doc = {
  info: {
    version: "1.0.0",
    title: "API TFLPIII HORUS BIBLIOTECA",
    description: "Documentação da API TFLPIII HORUS BIBLIOTECA",
  },
  host: "localhost:3000",
  basepath: "",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

const outputFile = "./src/docs/swagger.yaml";
const endpointsFiles = [
  "./src/routes/usuario.js",
  "./src/routes/aluno.js",
  "./src/routes/professor.js",
  "./src/routes/turma.js",
  "./src/routes/genero.js",
  "./src/routes/autor.js",
  "./src/routes/editora.js",
  "./src/routes/livro.js" /*,
  "./src/routes/aluguel.js"*/,
  "./src/routes/aluno_turma.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);
