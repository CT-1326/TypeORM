const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const options = {
    info: {
        title: 'TypeORM Swagger API',
        description: '테스트 문서'
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
    schemes: ['http']
};

const outputFile = './src/swagger/swagger-output.json';
const endpointsFiles = ['./src/index.ts'];
swaggerAutogen(outputFile, endpointsFiles, options);