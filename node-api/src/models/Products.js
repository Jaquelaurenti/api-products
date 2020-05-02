//Criando o Schema 

const mongooe = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongooe.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

// Registrando o mongoose paginate da Aplicação
ProductSchema.plugin(mongoosePaginate);

// Registrando o schema
mongooe.model('Product', ProductSchema);