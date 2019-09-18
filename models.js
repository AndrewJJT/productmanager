const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:[true, "Title of product is requried!"], minlength:[4, "Title needs to be longer than 4 characters!"]},
        price:{type:Number, required:[true, "The price of the product is required!"]},
        imageurl:{type:String}
    },
    {timestamps:true}
)

const Products = mongoose.model('Product', ProductSchema);

module.exports = Products;