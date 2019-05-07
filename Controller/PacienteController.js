// Import contact model
Paciente = require('../Models/PacienteModel');
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
    //console.log(Paciente)
    Paciente.get(function (err, pacientes) {       
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Paciente retrieved successfully"+pacientes.length,
            data: pacientes
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    try{
        console.log(req.body)
        for (var i = 0; i <  req.body.length; i++) {
            var paciente = new Paciente();
            paciente._id =  req.body[i]._id;
            paciente.primer_nombre = req.body[i].primer_nombre ? req.body[i].primer_nombre : paciente.primer_nombre;
            paciente.segundo_nombre = req.body[i].segundo_nombre;
            paciente.primer_apellido = req.body[i].primer_apellido;
            paciente.segundo_apellido = req.body[i].segundo_apellido;
            paciente.apellido_cadada =req.body[i].apellido_cadada;
            paciente.id_sexo =req.body[i].id_sexo;
            paciente.fecha_nacimiento =req.body[i].fecha_nacimiento;
            paciente.id_departamento_domicilio =req.body[i].id_departamento_domicilio;
            paciente.id_pais_nacimiento =req.body[i].id_pais_nacimiento;
            paciente.id_departamento_nacimiento =req.body[i].id_departamento_nacimiento;
            paciente.id_user =req.body[i].id_user;
            paciente.id_nacionalidad =req.body[i].id_nacionalidad;
            paciente.fecha_registro =req.body[i].fecha_registro;
            paciente.id_municipio_nacimiento =req.body[i].id_municipio_nacimiento;
            paciente.id_doc_ide_paciente =req.body[i].id_doc_ide_paciente;
            paciente.numero_doc_ide_paciente =req.body[i].numero_doc_ide_paciente;
           
            paciente.save()

        }
        res.json({
            message: 'New contact created!' + req.body.length,
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
    Paciente.findById(req.params.paciente_id, function (err, paciente) {
        if (err)
            res.send(err);
        res.json({
            message: 'Paciente details loading..',
            data: paciente
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Paciente.findById(req.params.paciente_id, function (err, paciente) {
        if (err)

            res.send(err);
        paciente.name = req.body.name ? req.body.name : paciente.name;
        paciente.gender = req.body.gender;
        paciente.email = req.body.email;
        paciente.phone = req.body.phone;
// save the contact and check for errors
        paciente.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Paciente Info updated',
                data: paciente
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Paciente.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Paciente deleted'
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
