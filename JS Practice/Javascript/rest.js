//spread way
// function sum() {
//     // console.log(arguments);

//     return [...arguments].reduce((total, num) => total + num);
// }

//rest way
function sum(...nums) {
    console.log(nums);

    return nums.reduce((total, num) => total + num);
}