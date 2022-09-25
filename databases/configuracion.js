const mongoose = require ('mongoose')


const mongoConn =async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log ('conexion exitosa con mongo')

    }catch(e){
        console.log('error de conexion', e);
        throw new Error ('error de conexion');

    }


}

module.exports = {mongoConn}