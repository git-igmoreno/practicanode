//hola
var express=require('express');
var app=express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const expressSanitizer = require('express-sanitizer');

const productRoutes = require('./src/controllers/Product.controller');

app.use(cookieparser())
app.use(bodyParser.json({ limit: '200mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '200mb' }))
app.use(expressSanitizer())



/**
 * Controladores
 */
app.get('/',async function(req, res){
    res.json({
        success:true
    })
    res.status(200);
});

app.post('/',async function(req,res){
    res.json({
        success:true,
        input: req.body
    })
    res.status(200);
});


app.put('/',async function(req,res){
    res.json({
        success:true
    })
    res.status(200);
});


app.delete('/',async function(req,res){
    res.json({
        success:true
    })
    res.status(200);
});


app.use('/', productRoutes);

const puerto = 3000;
mongoose.connect('mongodb+srv://root:ycyeWmjZbJrnhmLf@cluster0.mibrz.mongodb.net/practicanode?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
    if (err) {
        throw new Error(err.message);
    }
    app.listen(puerto, function() {
        console.log("Servidor iniciado en " + puerto);
    });
});