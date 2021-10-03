const arrNum = [2, 3, 5, 7, 8, 9];

// arrNum.forEach(element => {
//     console.log(element * element);
// });

let str = '';
str.trim();

arrNum.forEach(function(n) {
    console.log(n * n);
});

const double = arrNum.map(function(n) {
    return n * 2;
})

double.forEach(function(n) {
    console.log(n);
});

const arr = [" timothee", "    derth_hater", "ssssfraasy     ", "   elton Joe   "];

cleanNames(arr);

function cleanNames(arrStr) {
    const arrTrim = arrStr.map(function(str) {
        return str.trim();
    });

    arrTrim.forEach(function(tr) {
        console.log(tr);
    })
}