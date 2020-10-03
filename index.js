//hola



var express=require('express');
var app=express();


app.get('/',function(req,res){
    res.json({
        success:true
    })
    res.status(200);
});

app.post('/',function(req,res){
    res.json({
        success:true
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



var server = app.listen(3000,function() {});


