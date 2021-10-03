const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];

const langCode = franc(input);
console.log(langCode);
if (langCode === 'und') {
    console.log(`Sorry! couldn't figure out what language is. Please try with some more sample text.`.red);
} else {
    const language = langs.where('3', langCode);
    console.log(`Our best guess is : ${language.name}`.green);
}

// console.log(langCode);
// console.log(language);
// console.log(franc(`I'm Deepak Shinde`));
// console.log(franc(`এটি একটি ভাষা একক IBM স্ক্রিপ্ট`));