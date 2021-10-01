var mongoose = require("mongoose");

var  Schema = mongoose.Schema;

var ProductoSchema = new Schema({

    codigo: {type:Number, required:true},
    nombre : {type:String, required:true, max:100},
    precio : {type:Number, required:true, },
    existencia : {type:Number, required:true}
});

module.exports = mongoose.model('Producto', ProductoSchema);