// Obter uma lista de todos os pokemons
// Função que cria os cards de usuários e retorna os mesmos
const createUserCard = (pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.style = 'background-image:url("./images/pokedex.png"); width: 250px; height:380px; background-size:100%; background-repeat: no-repeat';

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const imagePokemon = document.createElement("img");

    imagePokemon.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/showdown/25.gif?raw=true`;

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = pokemon.name;
  
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.style.position = "absolute";
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(imagePokemon);
  
    card.appendChild(cardBody);
  
    return card;
  };

   const appendPokemonCard = (card) => {
     const containerPokemons = document.getElementById("containerPokemons")
     containerPokemons.appendChild(card)
  }



async function fethPokemons(){
await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    .then(response => response.json())
    .then((data) => {
        // Imprime os dados brutos recebidos da PokeAPI
        console.log(data);

        // Itera sobre a lista de resultados e imprime os nomes dos pokémons
        data.results.forEach((pokemon) => {
           
            const card = createUserCard(pokemon)
            appendPokemonCard(card)

            console.log(pokemon);
        });
    })
    .catch(error => console.error(error));

}

fethPokemons();