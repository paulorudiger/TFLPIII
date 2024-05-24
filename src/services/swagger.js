const swaggerAutogen = require('swagger-autogen')('pt-br');

const doc = {
    info: {
        version: "1.0.0",
        title: "API TFLPIII HORUS BIBLIOTECA",
        description: "Documentação da API TFLPIII HORUS BIBLIOTECA"
    },
    host: 'localhost:3000',
    basepath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/aluno.js', './src/routes/professor.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);