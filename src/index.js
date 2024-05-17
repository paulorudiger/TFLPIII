const express = require("express");
const app = express();
app.use(express.json());
require('./services/swagger.js')

// posteriormente vai para o /login
app.get('/', (req,res) => {
    //   res.cookie('meuCookie2024', 'abcde');
       res.send('Hello World!'); 
   });
   

const port = 3000;

//const cookieParser = require('cookie-parser');

//app.use(cookieParser());

require('./routes')(app)
app.get('/', (req, res) => { res.status(200).send('Hello World!'); });

app.use('/v1/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(port, () => {
    console.log(`aplicação rodando na porta ${port}`);
});