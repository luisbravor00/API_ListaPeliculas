const Movie = require('./../models/peliculas');
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
            actors: req.actors
        });

        console.log('Pelicula nueva:\n'+newMovie);

        // newMovie.save().then(savedMovie => {
        //     console.log("New movie added!");
        //     alert('Your movie "'+savedMovie.name+'" has been added.');
        //     res.redirect('/');
        // }).catch(error => {
        //     console.log("Error adding the new movie :(");
        //     res.redirect('/')
        // })
    }
}

module.exports = new MovieController();