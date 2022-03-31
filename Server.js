const express = require('express');
const app = express();
const cont = require('./Contenedor.js');

app.get('/productos',(req,res)=>{
    res.send(cont.getAll());
});

app.get('/productosRandom',(req,res)=>{
    res.send(cont.getById());
});

const server = app.listen(8080, () =>{
    console.log('servidor levantado');
});

app.on('error', error => console.log(`Error de servidor ${error}`));