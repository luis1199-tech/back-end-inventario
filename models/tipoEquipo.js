const {Schema, model}= require ("mongoose");

const TipoEquipoShema = Schema ({
    nombre: {
        type: String,
        required: [true,'nombre de equipo requerido']
    }, 
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechacreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date,
        default: new Date()
    }

})

module.exports = model('TipoEquipo', TipoEquipoShema)