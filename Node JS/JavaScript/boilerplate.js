const fs = require('fs');
//Async way
// Creates dogs, regardless of whether `/tmp` and /tmp/a exist.
// console.log(fs);
// fs.mkdir('dogs', { recursive: true }, (err) => {
//     console.log('Inside fs callback!');
//     if (err) throw err;
// });

// console.log('After fs.mkdir completion!');

//Sync way
// fs.mkdirSync('cats');
// console.log('After fs.mkdir completion Sync way!');

const folderName = process.argv[2] || 'Project' //default assignment;

try {
    fs.mkdirSync(folderName);

    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log(e);
}