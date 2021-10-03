const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Oh no error!');
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').
get(function() {
    return `${this.first} ${this.last}`;
}).
set(function(v) {
    this.first = v.substr(0, v.indexOf(' '));
    this.last = v.substr(v.indexOf(' ') + 1);
});

personSchema.pre('save', async function() {
    this.first = 'Yo';
    this.last = 'Mama';
    console.log('About to Save!');
});

personSchema.post('save', async function() {
    console.log('Just Saved!');
});

const Person = mongoose.model('Person', personSchema);