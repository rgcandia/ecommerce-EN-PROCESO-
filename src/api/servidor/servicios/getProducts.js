import db from '../../db.json' assert { type: "json" }

const  getProducts =  ()=>{
    const {items} =  db;
    return items;
}

export default   getProducts;