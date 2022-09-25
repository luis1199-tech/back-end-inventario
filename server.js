const app = require('./app')
const {mongoConn} = require ('./databases/configuracion')
const dotenv = require ('dotenv').config()

app.set ('port', process.env.PORT || 3000)

const conn  = mongoConn ()

app.listen (app.get ('port'), () =>{
    console.log (`el puerto arranco por 3000 ${app.get ('port')}`);
} );
