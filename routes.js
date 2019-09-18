var controllers = require('./controllers')

module.exports = function(app){
    app.get('/products', controllers.getallproducts)
    app.get('/products/:id', controllers.getproduct)
    app.post('/products', controllers.addproduct)
    app.put('/products/:id', controllers.updateproduct)
    app.delete('/products/:id', controllers.deleteproduct)
}