const mongoose = require('mongoose');

const Product = mongoose.model('Product');

// será exposto para ser utilizado no routes
module.exports={
    async index(req, res){
        
        // utilizando a desestruturação, vamos acessar os parâmetros do request
        const { page = 1 } = req.query;
        // no objeto vazio passaríamos o Where (filtros)
        const products = await Product.paginate({}, { page, limit:10 });

        return res.json(products);
    },
    async show(req,res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    
    // O parametro new:true devolve o registro que acabou de sofrer alteração
    // sem ele o retorno do json será o registro antes da atualização

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true });

        return res.json(product);
    },

    async destroy(req,res){
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};