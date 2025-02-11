const express = require('express') 
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require('./models')


// Routers
const postRouter= require('./routes/Posts')
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server rodando na porta 3001");
    });
});


/* ou 

// Função nomeada para ser usada no callback

function serverCallback() {
    console.log("Server rodando na porta 3001");
}

// Passamos a função sem os parênteses, para ser executada no momento certo

app.listen(3001, serverCallback);

*/