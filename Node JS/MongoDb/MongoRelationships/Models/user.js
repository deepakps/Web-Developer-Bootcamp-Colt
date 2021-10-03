const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection established!');
    })
    .catch(err => {
        console.log('Mongo connection error!');
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    addresses: [{
        _id: { id: false },
        street: String,
        city: String,
        state: String,
        country: {
            type: String,
            required: true
        }
    }]
});

const User = mongoose.model('User', userSchema);

const makeUser = async() => {
    const usr = new User({
        firstName: 'Snehal',
        lastName: 'Shinde'
    });
    usr.addresses.push({
        street: '347/48, Raviwar Peth',
        city: 'Karad',
        state: 'Maharashtra',
        country: 'Bharat'
    });

    const result = await usr.save();
    console.log(result);
};

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '202, Gerardine CHSL',
        city: 'Thane',
        state: 'Maharashtra',
        country: 'Bharat'
    });
    const result = await user.save();
    console.log(result);
};

addAddress('60cf435cb987084e287d2452');

//makeUser();