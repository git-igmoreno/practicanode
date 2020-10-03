//hola
var express=require('express');
var app=express();

const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const expressSanitizer = require('express-sanitizer');

app.use(cookieparser())
app.use(bodyParser.json({ limit: '200mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '200mb' }))
app.use(expressSanitizer())


app.get('/',function(req,res){
    res.json({
        success:true
    })
    res.status(200);
});

app.post('/',function(req,res){
    res.json({
        success:true,
        input: req.body
    })
    res.status(200);
});


app.put('/',function(req,res){
    res.json({
        success:true
    })
    res.status(200);
});


app.delete('/',function(req,res){
    res.json({
        success:true
    })
    res.status(200);
});


const puerto = 3000;
var server = app.listen(puerto,function() {

    console.log("Servidor iniciado en " + puerto)

});


