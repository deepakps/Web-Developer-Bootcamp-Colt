document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('#input');
// input.addEventListener('keydown', () => {
//     console.log('Keydown');
// });

// input.addEventListener('keyup', () => {
//     console.log('keyup');
// });
input.addEventListener('keydown', (e) => {
    // console.log(e);
    // console.log(e.key);
    // console.log(e.code);
    switch (e.code) {
        case 'ArrowUp':
            console.log(e.key);
            break;
        case 'ArrowDown':
            console.log('Down');
            break;
        case 'ArrowLeft':
            console.log('Left');
            break;
        case 'ArrowRight':
            console.log('Right');
            break;
        default:
            console.log('Ignored');
    }
});