const db = require('../app');
// assert { type: "json" }
const  getProducts =  ()=>{
    const {items} =  db;
    return items;
}

module.exports =    getProducts;