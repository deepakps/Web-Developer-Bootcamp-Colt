const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product');
const Farm = require('./models/farm');

mongoose.connect('mongodb://localhost:27017/farmStandTake', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open!');
    })
    .catch(err => {
        console.log('Connection Error!');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});

//fARM ROUTES
app.get('/farms', async(req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.get('/farms/:id', async(req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
});

app.delete('/farms/:id', async(req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
});

app.post('/farms', async(req, res) => {
    const farm = new Farm(req.body);
    // console.log(farms);
    await farm.save();
    res.render('farms/show', { farm });
});

app.get('/farms/:id/products/new', async(req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, id, farm });
});

app.post('/farms/:id/products', async(req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;

    const farm = await Farm.findById(id);
    const product = new Product({ name, price, category });

    farm.products.push(product);
    product.farm = farm;

    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`);
});

//PRODUCT ROUTES
const categories = ['fruit', 'vegetable', 'diary'];

app.get('/products', async(req, res) => {
    const { category } = req.query;

    /*console.log(products);
    res.send('All products will be here!');*/
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }

});

app.get('/products/new', (req, res) => {
    //res.send('Woof!');
    res.render('products/new', { categories });
});

app.post('/products', async(req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    // console.log(newProduct);
    //res.send('making your product!');
    res.redirect(`/products/${newProduct._id}`);
});

app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name');
    // console.log(product);
    // res.send('details page!');
    res.render('products/show', { product });
});

app.get('/products/:id/edit', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
});

app.put('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, useFindAndModify: false });
    res.redirect(`${product._id}`);
    // console.log(req.body);
    // res.send('PUT!!!');s
});

app.delete('/products/:id', async(req, res) => {
    //res.send('Deleted!');
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
});