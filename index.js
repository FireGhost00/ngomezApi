const express = require('express');
const body_parse = require('body-parser');
const cors = require('cors');
const app = express();

app.use(body_parse.urlencoded({extended: true}));
app.use(body_parse.json());
app.use(cors());

const db_manager = require('./persistence/dbmanager')


////////////////// crud 
///////// create ------------- post

app.post('/Producto',(req,res) =>{
db_manager.producto_create(req,res)
});

///////// READ ------------- GET
app.get('/Producto',(req,res) =>{
    db_manager.producto_read(req,res)
    });
///////// UPDATE ------------- PUT
app.put('/Producto',(req,res) =>{
    db_manager.producto_update(req,res)
    });
///////// DELETE ------------- DELETE
app.delete('/Producto',(req,res) =>{
    db_manager.producto_delete(req,res)
    });
app.listen(8985,() =>{
    console.log("API REST is running 8985 !!!!")
    });
    