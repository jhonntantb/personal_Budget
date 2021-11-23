const { Router } = require('express');
// Importar todos los routers;
const categories=require('./categories')

const router = Router();

// Configurar los routers
router.use('/countries',categories);

module.exports = router;
