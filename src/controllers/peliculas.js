const Movie = require('./../models/peliculas');
const emptyMovie = new Movie ({
    name: 'N/A',
    synopsis: 'N/A',
    genre: 'N/A',
    duration: 0,
    director: 'N/A',
    actors: 'N/A'
})

class MovieController {

    listarPeliculas(req, res){
        console.log("CONTROLLER: Se solicito listar las peliculas");
        Movie.find().then(movies => {
            console.log(movies);
            res.json(movies);
        }).catch(e => {
            res.send("No se obtuvieron las peliculas.");
        })
    }
    
    crearPelicula(req, res){
        console.log("CONTROLLER: Se solicito crear una pelicula");
        const newMovie = new Movie({
            name: req.body.name,
            synopsis: req.body.synopsis,
            genre: req.body.genre,
            duration: req.body.duration,
            director: req.body.director,
            actors: req.body.actors.split(',').map(actor => actor.trim())
        });

        console.log('\nPelicula nueva:\n'+newMovie);

        newMovie.save().then(savedMovie => {
            console.log("New movie added!");
            res.send('<script>alert("Your movie has been added succesfuly!"); window.location = "/";</script>')
        }).catch(error => {
            console.log("Error adding the new movie :(");
            res.send('<script>alert("Error adding the new movie :("); window.location = "/";</script>')
        })
    
    }
}

module.exports = new MovieController();