const cardPokemon = async (pokemon, types, id, pokemonOne) => {    
  
    const card = document.createElement("div");

    card.classList.add("card");
    
    const imagePokemon = document.createElement("img"); 
    
    imagePokemon.src = "../../src/images/pokedex.png"
    
    imagePokemon.classList.add("imagePokedex");
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    const gifPokemon = document.createElement("img");

    types.map(({type}) => {
      // console.log("Type: ", type);
    })

    gifPokemon.src = pokemonOne['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] || pokemonOne['sprites']['other']['official-artwork'] ;

    gifPokemon.classList.add("gifPokemon");
    
    const cardTitle = document.createElement("h1");
    
    cardTitle.classList.add("cardTitle");

    const pokemonName = document.createElement("span"); 

    const pokemonNumber = document.createElement("span"); 
    
    pokemonName.classList.add("pokemonName");

    pokemonNumber.classList.add("pokemonNumber"); 

    const buttonInfo = document.createElement("button");

    buttonInfo.classList.add("buttonInfo");

    buttonInfo.textContent = "Details";

    pokemonNumber.textContent = `${id.toString().padStart(4, '0')} - `;
    pokemonName.textContent = pokemon.name;

    cardTitle.append(pokemonNumber);
    cardTitle.append(pokemonName);
  
    cardBody.appendChild(gifPokemon);
    cardBody.appendChild(buttonInfo);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(imagePokemon);
  
    card.appendChild(cardBody);
  
    return card;
};

const appendPokemonCard = async (card) => {
    const containerPokemons = document.getElementById("containerPokemons");
    await containerPokemons.appendChild(card);
  };

export { cardPokemon, appendPokemonCard };