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

const userSchema = new Schema({
    name: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async() => {
//     // const user = new User({ name: 'FishLover27', age: 34 });
//     const user = await User.findOne({ name: 'FishLover27' });
//     const tweet2 = new Tweet({ text: 'Something is Fishy!', likes: 3444 });

//     tweet2.user = user;
//     // console.log(await user.save());
//     console.log(await tweet2.save());
// }

// makeTweets();

const findTweet = async() => {
    const tweet = await Tweet.find({})
        .populate('user')
        .then(t => console.log(t));
}

findTweet();