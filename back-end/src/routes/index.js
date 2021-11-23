const { Router } = require('express');
// Importar todos los routers;
const categories=require('./categories')
const operation=require("./operation")
const user=require("./user")

const router = Router();

// Configurar los routers
router.use('/categories',categories);
router.use('/operation',operation);
router.use('/user',user);


module.exports = router;
