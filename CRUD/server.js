const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');

//Iniciação do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com mongo db
mongoose.connect('mongodb+srv://tainamaiorano:Leonardo2024@library.d69ny.mongodb.net/?retryWrites=true&w=majority&appName=library', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log('Mongodb conectado'))
    .catch(err=>console.error('Erro ao conectar no mongo',err));

// Importação das rotas
const bookRoutes = require('../library-backend/routes/books');
app.use('/api/books',bookRoutes); // irá retornar a rota dos livros

// Define a porta do servidor
app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
});
