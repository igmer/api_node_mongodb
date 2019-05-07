var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    _id:{
        type: Number
    },
    codigo_departamento:{
        type: Number,
        required: false
    },
    codigo_municipio:{
        type: Number,
        required: false
    },
    codigo_area:{
        type: String,
        required: false
    },
    codigo_canton:{
        type: Number,
        required: false
    },
    codigo_colonia:{
        type: Number,
        required: false
    },
    codigo_sit_vivienda:{
        type: Number,
        required: false
    },
    numerofamilia:{
        type: Number,
        required: false
    },
    codigo_zona:{
        type: String,
        required: false
    },numerovivienda:{
        type: Number,
        required: false
    },id_estasib:{
        type: Number,
        required: false
    },codigo_religion:{
        type: Number,
        required: false
    },codigo_tipofamilia:{
        type: Number,
        required: false
    },codigo_puebloindigena:{
        type: Number,
        required: false
    },anio:{
        type: Number,
        required: false
    },
    direccion: {
        type: String,
        required: false
    },numerotelefono: {
        type: String,
        required: false
    },fechaintroduccion: {
        type: Date,
        required: false
    },
    tipo_riesgofamiliar: {
        type: Number,
        required: false
    },correlativo_tablet: {
        type: Number,
        required: false
    },nombre_otrareligion: {
        type: String,
        required: false
    },latitud_vivienda: {
        type: String,
        required: false
    },longitud_vivienda: {
        type: String,
        required: false
    },fecha_hora_ingreso: {
        type: Date,
        required: false
    },var_fam_completa: {
        type: Number,
        required: false
    },fam_completa: {
        type: Number,
        required: false
    },
    usuario_ingreso: String,
    ficha_activa: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit).sort({ _id: -1 });
}
