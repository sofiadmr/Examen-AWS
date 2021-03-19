const express = require('express');
const routers = express.Router();
const path = require('path');

routers.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../','public','index.html'));
    //res.json({hola:'hola'});
});

routers.get('/autor', (req, res)=>{
    res.json({alumno:'SDMR'});
});


module.exports = routers;