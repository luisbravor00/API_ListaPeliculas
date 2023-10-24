const { model, Schema } = require('mongoose');
const movieSchema = new Schema({
    name: {type: String, require: true },
    description: {type: String, require: true },
    director: {type: String, require: true },
    length: {type: Number, require: true },
    clasificacion: {type: String, default: 'PG13', require: true}
});

// Aqui se pone en model la coleccion de la bd, seguido del movie schema
module.exports = model('movies', movieSchema);