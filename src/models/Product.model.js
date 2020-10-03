const mongoose = require('mongoose');



/**
 * Modelos
 */
const Product = mongoose.model('Product', new mongoose.Schema({
    name: {
        type: String
    },
    category:{
        type: String
    }
}));

module.exports = Product;