var mongoose = require('mongoose');

var dev_db_url = "mongodb://localhost:27017/nelsonDB";


var mongoDB = process.env.mongoDB_URI || dev_db_url;

mongoose.connect(mongoDB);

//--, { useNewUrlParse:true, useUnifiedTopology:true, userFindAndModify:false}
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error',console.error.bind(console,'mongoDB conection error :'));

var Producto = require('./producto');

exports.producto_create = function(req,res){

    var producto = new Producto({
        
        codigo: req.body.codigo,
    nombre: req.body.nombre,
    precio : req.body.precio,
    existencia : req.body.existencia
    });
    producto.save(function(err){
        if(err){
            return next(err);
        }
        res.send({'message':'OK'});
    })


}

/// READ ---

exports.producto_read = function(req,res){

    Producto.findById(req.query.id, function(err,producto){
        if(err) return next(err)
        res.send(producto)
    })
}

/// UPDATE ---

exports.producto_update = function(req,res){
    Producto.findByIdAndUpdate(req.query.id,{$set:req.body}, function(err,producto){
        if(err) return next(err)
        res.send({'message':"UPDATE"})
    })
}
/// DELETE ---

exports.producto_delete = function(req,res){
    Producto.findByIdAndRemove(req.query.id, function(err,producto){
        if(err) return next(err)
        res.send({'message':"DELETE"})
    })
}
