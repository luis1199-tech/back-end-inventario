const {Schema, model} = require ("mongoose");


const UsuarioShema = schema ({

    nombre:{
        type: String,
        require: [true, 'nombre requerido del usuario']

    },
    email:{
        type: String,
        require: [true, 'se require email'],
        unique: true

    },
    estado:{
        ype: Boolean,
        default: true,
        required: true

    },

    fechaCreacion:{
        type: Date,
        default: new Date()
    },

    fechaActualizacion:{
        type: Date,
        default: new Date()
    }
})

module.exports = model ('Usuario', UsuarioShema ) 