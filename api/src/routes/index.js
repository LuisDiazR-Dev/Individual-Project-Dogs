
const router = require('express').Router()

// * Controllers imports
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogsApi = require('../controllers/API/getDogsAPI');
const postDogsDB = require('../controllers/DB/postDogsDB');






// * Rutas
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use()
//------------------Get
router.get('/home', getDogsApi)


//------------------Post
router.post('/addDog', postDogsDB  )







module.exports = router;