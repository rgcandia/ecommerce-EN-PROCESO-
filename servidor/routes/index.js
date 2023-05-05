const { Router } = require('express') ;
const productHandler = require('./handlers/productHandler.js');
const router = Router();
router.get('/productos',productHandler)
router.get('/',(req,res)=>{
    res.send("Hola soy el Server")
})
module.exports =   router;