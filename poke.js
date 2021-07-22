const Container = document.getElementById(row);
const poke_num = 200;



const fetchPokemons = async () => {
    for (let i = 1; i <= poke_num; i++) {
        await getPokemon(i);
    }
}


const getPokemon = async id => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // const url = "https://pokeapi.co/api/v2/pokemon/"+id;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name.toUpperCase();
    const type = pokemon.types.map(el => el.type.name);

    const pokeInnerHTML = `
    <div class="img">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png" >
    </div>
    
    
    <div class="info">
        <span class="number"><small>${pokemon.id}</small></span>
        <h2>${name}</h2>
        <small class="type">Type:${type}</small>

    </div>

    `;


    pokemonEl.innerHTML = pokeInnerHTML;
    row.appendChild(pokemonEl);
}

