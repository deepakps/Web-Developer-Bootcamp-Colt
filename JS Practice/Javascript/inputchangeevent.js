const input = document.querySelector('input');
const h2 = document.querySelector('h2');

//input.value = 'Hello';

//input change - event occurs when any value changes in the input and focus goes out.
//input input - event occurs when any value changes in the input regardless of focus comes out or in.

// input.addEventListener('change', (evt) => {
//     console.log('god');
// })

input.addEventListener('input', (evt) => {
    h2.innerText = input.value;
    // console.log('god');
    // console.log(evt);
});