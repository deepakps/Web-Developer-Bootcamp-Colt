const formTweet = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');

//Below line of remove code is attached to existing document lis. So newly added lis won't be removed as they are not linked.
const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     // li.addEventListener('click', () => li.remove());
//     li.addEventListener('click', (e) => e.target.remove());
// }

tweets.addEventListener('click', (e) => {
    // console.log('Clicked on Li');
    // console.log(e);
    e.target.nodeName === 'LI' && e.target.remove();
});

formTweet.addEventListener('submit', (e) => {
    e.preventDefault();
    // const userInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    // console.log(`${userInput.value} ${tweetInput.value}`);

    // const userInput = formTweet.elements.username;
    // const tweetInput = formTweet.elements.tweet;
    // // console.log(`${userInput.value} ${tweetInput.value}`);

    // const newTweet = document.createElement('li');
    // const bTag = document.createElement('b');

    // bTag.append(userInput.value);
    // newTweet.append(bTag);
    // newTweet.append(` - ${tweetInput.value}`);
    // tweets.append(newTweet);
    // console.log(e);

    const userNameInput = formTweet.elements.username;
    const tweetInput = formTweet.elements.tweet;

    addTweet(userNameInput.value, tweetInput.value);

    userNameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (userName, tweet) => {

    const newTweet = document.createElement('li');

    // const bTag = document.createElement('b');

    // bTag.append(userName);
    newTweet.append(userName);
    newTweet.append(` - ${tweet}`);
    tweets.append(newTweet);
};