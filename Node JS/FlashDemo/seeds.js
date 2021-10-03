const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open!');
    })
    .catch(err => {
        console.log('Connection Error!');
        console.log(err);
    });

// const prod = new Product({
//     name: 'Ruby Grapefuit',
//     price: 1.99,
//     category: 'fruit'
// });

// prod.save().then(p => {
//         console.log(p);
//     })
//     .catch(p => {
//         console.log(e);
//     });

const seedProducts = [{
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddes Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);

    });