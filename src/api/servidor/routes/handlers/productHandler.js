import getProducts from '../../servicios/getProducts.js'
const  productHandler = (req,res)=>{
    const productos = getProducts();
    res.send(productos);
}

export default productHandler;