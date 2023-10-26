const router = require('express').Router();
// const authMiddleware = require('./../src/middlewares/auth');
const peliculasController = require('./../src/controllers/peliculas');
const bodyParser =require('body-parser');
// router.use('/users', authMiddleware);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))
router.get('/movies', peliculasController.listarPeliculas);
router.post('/movies', bodyParser.json(), peliculasController.crearPelicula);
module.exports = router;