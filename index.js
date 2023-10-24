const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use('', routes);
app.get('', (req, res) => {
    console.log('Recibi una peticion para acceder al formulario');
    // response.send('PANTALLA: Respuesta de petición!');
    res.sendFile(path.join(__dirname, '/index.html'));
});

const mongoUrl = 'mongodb+srv://temp_user:temp_user@test.mygbwdt.mongodb.net/todos?retryWrites=true&w=majority';
mongoose.connect(mongoUrl).then(() => {
    app.listen(3000, () => {
        console.log('La aplicacion esta corriendo de manera exitosa!');
    });
}).catch(err => {
    console.log('No se pudo conectar a la base de datos :(', err);
});