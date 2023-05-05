const  server = require ('./app.js');
// const server = require('./app.js')
const PORT = 3001
server.listen(PORT,()=>{
    console.log(`Servidor inicializado en puerto ${PORT} `);
})