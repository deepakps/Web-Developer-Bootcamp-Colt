const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Oh no error!');
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive yo dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    /*
    categories: {
        type: [String],
        default: ['cycling']
    } 
    */
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

//Instance Methods
productSchema.methods.greet = function() {
    console.log('Hello! Hi! Howdy!');
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCategory) {
    this.categories.push(newCategory);
    return this.save;
}

//Instance Methods
productSchema.statics.fireSale = function() {
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = new mongoose.model('Product', productSchema);

// const bike = new Product({ name: 'Cycling Jercey', price: '3.50', categories: ['cycling'], size: 'S' });
// bike.save()
//     .then(data => {
//         console.log('Saved successfully!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Error Occurred!');
//         console.log(err);
//     });

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -50 }, { new: true, runValidators: true });
// .then(data => {
//         console.log('Saved successfully!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Error Occurred!');
//         console.log(err);
//     });

const findProduct = async() => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    //foundProduct.greet();
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

//findProduct();

Product.fireSale().then(res => console.log(res));