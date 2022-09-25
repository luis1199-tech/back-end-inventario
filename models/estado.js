const {Schema, model} = require ("mongoose");

const EstadoShema = Schema ({
    nombre: {
        type: String,
        require: [true,'nombre del estado requerido']

    },

    estado: {
        type: Boolean,
        default: true,
        require: true

    },

    fechaCreacion: {
        type: Date,
        default: new Date()

    },
    fechaActualizacion:{
        type: Date,
        default: new Date()
    }

})

module.exports = model('Estado', EstadoShema)