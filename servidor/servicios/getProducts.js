const db = require('../db.json');
// assert { type: "json" }
const  getProducts =  ()=>{
    const {items} =  db;
    return items;
}

module.exports =    getProducts;