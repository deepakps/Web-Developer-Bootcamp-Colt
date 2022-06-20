const mongoose = require('mongoose');
const Campground = require('../models/campground');

const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected')
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    // const camp = new Campground({ title: 'purpel field' });
    // await camp.save();
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            campground: {
                author: `6197716ca5c96a37685ac235`,
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                image: `https://source.unsplash.com/collection/483251`,
                description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quam similique, deserunt aliquid facilis ratione natus earum vitae quae laudantium optio tempora! Nisi adipisci odio magnam nihil aut facilis nobis?`,
                price
            }
        });
        if (i === 0) {
            console.log(camp);
        }
        await camp.save();
    }
}

// const seedDB = () => {
//     const random1000 = Math.floor(Math.random() * 1000);
//     console.log(`${cities[random1000].city}, ${cities[random1000].state}`);
// }
seedDB()
    .then(() => db.close());