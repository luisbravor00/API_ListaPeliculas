const router = require('express').Router();
// const authMiddleware = require('./../src/middlewares/auth');
const peliculasController = require('./../src/controllers/peliculas');

// router.use('/users', authMiddleware);

router.get('/peliculas', peliculasController.listarPeliculas);
// router.post('/users', usersController.crear);
module.exports = router;