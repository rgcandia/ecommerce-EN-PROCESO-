const { Router } = require('express') ;
const productHandler = require('./handlers/productHandler.js');
const router = Router();
router.get('/productos',productHandler)
module.exports =   router;