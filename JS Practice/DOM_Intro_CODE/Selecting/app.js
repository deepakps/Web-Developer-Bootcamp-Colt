const banner = document.getElementById('banner');
const queryBanner = document.querySelector('#banner');

const allImages = document.getElementsByTagName('img');
//find first img element:
const queryImage = document.querySelector('img');
//find all img element:
const queryallImages = document.querySelectorAll('img');

const nthofImae = document.querySelector('img:nth-of-type(2)');

const titleJava = document.querySelector('a[title="Java"]');

const innerTxt = document.querySelector('p').innerText;

const innerHtm = document.querySelector('p').innerHTML;
document.querySelector('h1').innerHTML = '<i> Hello </i>';
document.querySelector('h1').innerHTML += '<sup>You there!<sup>'

const inputText = document.querySelector('input[type="text"]');
//inputText.type = 'color';
inputText.setAttribute('type', 'password');

//JS Styles
const h1 = document.querySelector('h1');
h1.style.color = "Olive";

const txtContent = document.querySelector('p').textContent;

const squareImages = document.getElementsByClassName('square');
const querysquareImages = document.querySelector('.square');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
    link.style.color = '#457b9d';
    link.style.textDecoration = 'none';
    link.style.textDecoration.style = 'wavy';
}

//JS Styles
// const allLinks = document.querySelectorAll('a');

// for (let allLink of allLinks) {
//     allLink.style.color = '#457b9d';
// }

//classList
const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('border');
//h2.classList.remove('border');
//h2.classList.contains('border');
//h2.classList.toggle('border');

//Parent Child Sibling
const firstBold = document.querySelector('b');
//firstBold.parentElement
//firstBold.parentElement.parentElement
//firstBold.parentElement.parentElement.parentElement

//firstBold.nextSibling
//firstBold.previousSibling

//firstBold.nextElementSibling
//firstBold.previousElementSibling
const newImage = document.createElement('img');
newImage.src = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
document.body.append(newImage)

const newH3 = document.createElement('h3');
newH3.innerText = "I'm new H3";
document.body.appendChild(newH3);

const h2 = document.createElement('h2');
h2.append("about to create history");

const h2 = document.querySelector('h2[id="History"]');
h2.insertAdjacentElement('afterend', h2);