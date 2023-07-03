const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    proce: Number
});

module.exports = mongoose.model('Product',productSchema);