const pokemonUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// const secContainer = document.querySelector('section[id="container"]');
const secContainer = document.querySelector("#container");

const h1 = document.querySelector('h1');
h1.innerText = 'Look at my Pokemons!';

for (let i = 1; i <= 898; i++) {

    let divPokemon = document.createElement('div');
    //divPokemon.className = 'pokemon';
    divPokemon.classList.add('pokemon');

    let pokeImg = document.createElement('img');
    pokeImg.src = `${pokemonUrl}${i}.png`;
    let spanImg = document.createElement('span');
    spanImg.innerText = `#${i}`;

    // divPokemon.insertAdjacentElement('beforebegin', pokeImg);
    divPokemon.appendChild(pokeImg);
    divPokemon.appendChild(spanImg);

    secContainer.insertAdjacentElement('beforebegin', divPokemon);
}