var Product = require('./models')

var controllers = {
    getallproducts: function getallproducts(req, res){
        Product.find()
        .then(data=> res.json({message:"success", allproducts:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },
    getproduct: function getproduct(req, res){
        Product.find({_id:req.params.id})
        .then (data=> res.json({message:"success", product:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    addproduct: function addproduct(req,res){
        Product.create(req.body)
        .then (data=> res.json({message:"success", product:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    updateproduct: function updateproduct(req, res){
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
        .then (data=> res.json({message:"success", product:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    deleteproduct: function deleteproduct(req,res){
        Product.findByIdAndDelete({_id:req.params.id})
        .then (data=> res.json({message:"success", product:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    }
}

module.exports = controllers;