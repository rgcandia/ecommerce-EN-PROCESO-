const { Router } = require('express') ;
const productHandler = require('./handlers/productHandler.js');
const router = Router();
router.get('/productos',productHandler)
router.get('/',(req,res)=>{
    res.send("Servidor ok")
})
module.exports =   router;