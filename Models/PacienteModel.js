var mongoose = require('mongoose');
// Setup schem
var pacienteSchema = mongoose.Schema({
    _id: { type: Number },
    primer_nombre: { type: String, required: true },
    segundo_nombre: { type: String,   required: false  },
    primer_apellido: {type: String,  required: true },
    segundo_apellido: { type: String, required: false },
    apellido_cadada: {type: String,   required: false },
    id_sexo:{  type: Number,  required: true },
    fecha_nacimiento:{ type: Date, required: false},
    id_departamento_domicilio:{ type: Number, required: false },
    id_pais_nacimiento:{type: Number, required: false},
    id_departamento_nacimiento:{ type: Number,  required: false },
    id_user:{ type: Number, required: false },
    id_nacionalidad:{type: Number, required: false},
    fecha_registro:{ type: Number, required: false },
    id_municipio_nacimiento:{type: Number,required: false},
    id_doc_ide_paciente: {type: Number,required: false },
    numero_doc_ide_paciente: {type: String, required: false},
    
});
// Export Contact model
var Paciente = module.exports = mongoose.model('paciente', pacienteSchema);
module.exports.get = function (callback, limit) {
    Paciente.find(callback).limit(limit).sort({ _id: -1 });
}
