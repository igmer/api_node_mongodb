// Import contact model
Contact = require('./contactModel');
var express = require('express');

 var app = express();
 app.use(express.json());
 var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
bodyParser = {
  json: {limit: '50mb', extended: true},
  urlencoded: {limit: '50mb', extended: true}
};
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully"+contacts.length,
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {

    try{
        for (var i = 0; i <  req.body.length; i++) {
            var contact = new Contact();
            contact._id =  req.body[i]._id;
            contact.name = req.body[i].name ? req.body[i].name : contact.name;
            contact.gender = req.body[i].gender;
            contact.email = req.body[i].email;
            contact.phone = req.body[i].phone;
            contact.codigo_departamento =req.body[i].codigo_departamento;
            contact.codigo_municipio =req.body[i].codigo_municipio;
            contact.codigo_area =req.body[i].codigo_area;
            contact.codigo_canton =req.body[i].codigo_canton;
            contact.codigo_colonia =req.body[i].codigo_colonia;
            contact.codigo_sit_vivienda =req.body[i].codigo_sit_vivienda;
            contact.codigo_zona =req.body[i].codigo_zona;
            contact.numerovivienda =req.body[i].numerovivienda;
            contact.numerofamilia =req.body[i].numerofamilia;
            contact.id_estasib =req.body[i].id_estasib;
            contact.codigo_religion =req.body[i].codigo_religion;
            contact.codigo_tipofamilia =req.body[i].codigo_tipofamilia;
            contact.codigo_puebloindigena =req.body[i].codigo_puebloindigena;
            contact.anio =req.body[i].anio;
            contact.direccion =req.body[i].direccion;
            contact.numerotelefono =req.body[i].numerotelefono;
            contact.fechaintroduccion =req.body[i].fechaintroduccion;
            contact.ipo_riesgofamiliar =req.body[i].ipo_riesgofamiliar;
            contact.correlativo_tablet =req.body[i].correlativo_tablet;
            contact.nombre_otrareligion =req.body[i].nombre_otrareligion;
            contact.latitud_vivienda =req.body[i].latitud_vivienda;
            contact.longitud_vivienda =req.body[i].longitud_vivienda;
            contact.fecha_hora_ingreso =req.body[i].fecha_hora_ingreso;
            contact.fecha_hora_mod =req.body[i].fecha_hora_mod;
            contact.var_fam_completa =req.body[i].var_fam_completa;
            contact.fam_completa =req.body[i].fam_completa;
            contact.usuario_ingreso =req.body[i].usuario_ingreso;
            contact.usuario_mod =req.body[i].usuario_mod;
            contact.ficha_activa =req.body[i].ficha_activa;
            contact.save()

        }
        res.json({
        message: 'New contact created!',
        data: req.body.length
    });
    }catch(e){
        res.json({
        message: 'errors!',
        data: e
    });

    }



// save the contact and check for errors

};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)

            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};

exports.inicio = function(req,response){
    console.log(""+req)
    response.writeHead(302, {

  'Location': '../inicio.html'
  //add other headers here...
});
response.end();
}
