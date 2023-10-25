const router = require('express').Router();
// const authMiddleware = require('./../src/middlewares/auth');
const peliculasController = require('./../src/controllers/peliculas');

// router.use('/users', authMiddleware);

router.get('/movies', peliculasController.listarPeliculas);
router.post('/movies', peliculasController.crearPelicula);
module.exports = router;