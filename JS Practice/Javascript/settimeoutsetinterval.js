console.log("Hello!!!!");

setTimeout(() => {
    console.log("There you again.")
}, 3000);

console.log("Goodbye!");

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

//clearInterval(id)