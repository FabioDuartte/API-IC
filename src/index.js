const express = require('express');
const bodyParser = require('body-parser');
// no arquivo database/index.js vc criou a função agora vc vai usar ela
// como o node entende que index é o arquivo prioncipal n precisa digitar database/index.js basta database/index/
const mongodb = require('./database/')

mongodb.then(function(data) {
    // se o banco se conectar esle executa essa função
    console.log('database conectado')
}).catch(function(error) {
    // se de errado ele mostra o errro
    console.log('database error')
    console.error(error)
})

mongodb.co
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./controllers/authController')(app);

app.listen(3000);
