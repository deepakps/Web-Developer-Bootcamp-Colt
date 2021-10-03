function multiply(x, y) {
    return x * y;
}

function square(x) {
    return multiply(x, x);
}

function isRightTriangle(a, b, c) {
    return square(a) + square(b) === square(c);
}

console.log('Before');

console.log(isRightTriangle(3, 4, 5));

console.log('After');