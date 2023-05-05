const getProducts =require ('../../servicios/getProducts.js');
const  productHandler = (req,res)=>{
    const productos = getProducts();
    res.send(productos);
}

module.exports= productHandler;