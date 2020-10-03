

var express = require('express');
var router = express.Router();

const Product = require('../models/Product.model');




router.get('/product',async function(req, res){
   
    const query = {};

    if (req.query._id ) {
        query['_id'] = {
            $eq: req.query._id 
        }
    }
  
    if (req.query.categories ) {
        query['category'] = {
            $in: req.query.categories.split(",")
        }
    }
    

    const products = await Product.find(query);

    res.json(products)
    res.status(200);
});

router.get('/product/:productId',async function(req, res, next){

   try {
    const productId = req.params.productId;
    const product = await Product.findOne({_id: productId});

    if (!product) {

        res.status(404);

        return res.json({
            success:false,
            error: 'not found'
        });
    }

    res.json(product);
    res.status(200);
   } catch (err) {
    return next(err);
   }
});


router.delete('/product/:productId',async function(req, res){

    const productId = req.params.productId;
    const product = await Product.findOne({_id: productId});

    if (!product) {

        res.status(404);

        return res.json({
            success:false,
            error: 'not found'
        });
    }

    await Product.deleteOne({_id: productId})

    res.json({success: true});
    res.status(200);
});

router.put('/product/:productId',async function(req,res){

    const name = req.body.name;
    const productId = req.params.productId;
    const product = await Product.findOne({_id: productId});

    if (!product) {

        res.status(404);

        return res.json({
            success:false,
            error: 'not found'
        });
    }

    product.name = name;

    await product.save();
    
    res.json({
        success:true,
        response: product
    })
    res.status(200);
});



router.post('/product',async function(req,res){

    const name = req.body.name;

    if (!name) {
        res.status(400);

        return res.json({
            success:false,
            error: 'The name is required field'
        });
    }

    const product = await Product.create({name: name});
    
    res.json({
        success:true,
        response: product
    })
    res.status(200);
});





module.exports = router;
