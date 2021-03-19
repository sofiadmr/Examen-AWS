const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','view','index.html'));
});

router.get('/autor', (req, res)=>{
    res.json({alumno:'SDMR'});
});


module.exports = router;