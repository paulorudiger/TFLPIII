const express = require("express");
const app = express();
const port = 3000;

require('./routes')(app)
app.get('/', (req, res) => { res.status(200).send('Hello World!'); });


app.listen(port, () => {
    console.log(`aplicação rodando na porta ${port}`);
});


