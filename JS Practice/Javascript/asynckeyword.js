async function hello(str = 'From Shinde') {
    console.log(`Hello World! ${str}`);
}

const sing = async(str = `fuck it!`) => {
    console.log(`Oh baby sing song! ${str}`);
}

const dance = async function() {
    // throw ('Oh noo nooooo');
    return ('Oh baby ding dong!');
}

const fuck = async() => console.log('Oh baby fuck fuck!');

// sing()
//     .then(() => dance())
//     .then(data => console.log(`${data}`))
//     .catch(error => console.log(`${error}`));

const login = async(userName, password = 'shinde1') => {
    if (!userName || !password) throw 'Missing Credentials!';
    else if (password === 'shinde') return `Welcome ${userName}!`;
    else throw `Invalid password ${userName}!`;
}

login(`deepak`, `shinde`)
    .then(msg => {
        console.log(`Logged In!`);
        console.log(msg);
    })
    .catch(err => {
        console.log(`Error!`);
        console.log(`${err}`);
    });