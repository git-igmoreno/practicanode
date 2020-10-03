const mongoose = require('mongoose');



/**
 * Modelos
 */
const Product = mongoose.model('Product', new mongoose.Schema({
    name: {
        type: String
    }
}));

module.exports = Product;