const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection established!');
    })
    .catch(err => {
        console.log('Mongo connection error!');
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Summer', 'Rainy', 'Winter']
    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Godess Melon', price: 23, season: 'Summer' },
//     { name: 'Alphanso Mango', price: 45, season: 'Summer' },
//     { name: 'Nagpuri Oranges', price: 12, season: 'Rainy' },
// ]);

// const makeFarm = async() => {
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
//     const melon = await Product.findOne({ name: 'Godess Melon' });
//     farm.products.push(melon);
//     const result = await farm.save();
//     console.log(result);
// };

// makeFarm();

const addProduct = async() => {
    // await Farm.deleteMany({});
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const mango = await Product.findOne({ name: 'Alphanso Mango' });

    farm.products.push(mango);

    const result = await farm.save();
    console.log(result);
};

// addProduct();

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm));