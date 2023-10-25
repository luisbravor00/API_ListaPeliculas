const { model, Schema } = require('mongoose');
const movieSchema = new Schema({
    name: {type: String, require: true },
    synopsis: {type: String, require: true },
    genre: {type: String, require: true },
    duration: {type: Number, require: true },
    director: {type: String, require: true},
    actors: {type: [String]}
});

// Aqui se pone en model la coleccion de la bd, seguido del movie schema
module.exports = model('movies', movieSchema);