const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

app.use('', routes);
app.use(express.static(__dirname + '/public'));

app.get('', (req, res) => {
    console.log('Recibi una peticion para Listar Peliculas');
    res.sendFile(__dirname + '/index.html');
});

app.get('/create_movie', (req, res) => {
    res.sendFile(__dirname + '/create_movie.html');    
});

// app.post('/movies', (req, res) => {
//     console.log('INDEX: Recibi una peticion para Crear Peliculas');
//     console.log('PATH: '+__dirname+'/index.html');
//     res.sendFile(__dirname + '/index.html');
// });

const mongoUrl = 'mongodb+srv://temp_user:temp_user@test.mygbwdt.mongodb.net/todos?retryWrites=true&w=majority';
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'movies_db',
}).then(() => {
    app.listen(3000, () => {
        console.log('La aplicacion esta corriendo de manera exitosa!');
    });
}).catch(err => {
    console.log('No se pudo conectar a la base de datos :(', err);
});