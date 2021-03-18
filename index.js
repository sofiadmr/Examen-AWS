const express = require('express');
const fs = require('fs');
const handlebars = require('handlebars');
const router = express.Router();

router.get('/', (req, res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    let html = fs.readFileSync("./src/view/index.html");
    console.log(html);
    let mainTemplate = handlebars.compile(html.toString());
    res.write(mainTemplate());
    res.end();
});

module.exports = router;
