const Movie = require('./../models/peliculas');
class MovieController {
    listarPeliculas(req, res){
        Movie.find().then(responde => {
            res.send(response)
        }).catch(e => {
            res.send("No se obtuvieron las peliculas");
        })
    }

    crearPelicula(req, res){
        
    }
}

module.exports = new MovieController();