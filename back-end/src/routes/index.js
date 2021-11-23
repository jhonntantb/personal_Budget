const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const category=require('./category')


// Configurar los routers
router.use('/countries',category);

module.exports = router;
