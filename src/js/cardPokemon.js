const cardPokemon = (pokemon, id) => {    

    const card = document.createElement("div");

    card.classList.add("card");
  
    const imagePokemon = document.createElement("img"); 

    imagePokemon.src = "../../src/images/pokedex.png"

    imagePokemon.classList.add("imagePokedex");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const gifPokemon = document.createElement("img");

    // gifPokemon.src = `${pokemon["sprites"].[]}`;

    gifPokemon.classList.add("gifPokemon");
    
    const cardTitle = document.createElement("h1");
    
    cardTitle.classList.add("cardTitle");

    const pokemonName = document.createElement("span"); 

    const pokemonNumber = document.createElement("span"); 
    
    pokemonName.classList.add("pokemonName");
    pokemonNumber.classList.add("pokemonNumber"); 

    pokemonNumber.textContent = `${id.toString().padStart(4, '0')} - `;
    pokemonName.textContent = pokemon.name;

    cardTitle.append(pokemonNumber);
    cardTitle.append(pokemonName);
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(gifPokemon);
    cardBody.appendChild(imagePokemon);
  
    card.appendChild(cardBody);
  
    return card;
};

const appendPokemonCard = (card) => {
    const containerPokemons = document.getElementById("containerPokemons");
    containerPokemons.appendChild(card);
  };

export { cardPokemon, appendPokemonCard };