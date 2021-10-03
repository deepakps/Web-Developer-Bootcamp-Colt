function singSong() {
    console.log('DE');
    console.log('EP');
    console.log('AK');
}

function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName}`);
}

function repeat(message, numTimes) {
    let repeatStr = ''
    for (let i = 0; i < numTimes; i++) {
        repeatStr += message;
    }
    console.log(repeatStr);
    console.log(repeatStr.charAt(0));
    console.log(repeatStr.slice(1));
}

function capitalise(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function returnDay(day) {
    if (typeof day !== 'number') {
        return null;
    }
    if (day === 1) {
        return 'Monday';
    } else if (day === 2) {
        return 'Tuesday';
    } else if (day === 3) {
        return 'Wednesday';
    } else if (day === 4) {
        return 'Thursday';
    } else if (day === 5) {
        return 'Friday';
    } else if (day === 6) {
        return 'Saturday';
    } else if (day === 7) {
        return 'Sunday';
    } else {
        return null;
    }
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }

    return x + y;
}

function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].length - 1);
    }
}

function lastElement(arr) {
    if (arr.length === 0) {
        console.log(null);
    } else {
        console.log(arr[arr.length - 1]);
    }
}

singSong();
singSong();
singSong();

greet('Jingle', 'bell');

repeat('fuck ', 7);