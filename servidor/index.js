const  server = require ('./app.js');
// const server = require('./app.js')
const port = process.env.PORT || 3001
server.listen(port,()=>{
    console.log(`Servidor inicializado en puerto ${port} `);
})