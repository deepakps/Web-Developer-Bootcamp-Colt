const figlet = require('figlet');
const colors = require('colors');

figlet('Deepak Shinde', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green);
});