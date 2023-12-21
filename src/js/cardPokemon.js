const cardPokemon = async (pokemon, types, id, pokemonOne) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imagePokemon = document.createElement("img");
  imagePokemon.src = "../../src/images/pokedex.png";
  imagePokemon.classList.add("imagePokedex");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const gifPokemon = document.createElement("img");
  gifPokemon.classList.add("gifPokemon");

  // Verifica se a imagem principal está disponível
  const mainImage =
    pokemonOne["sprites"]["versions"]["generation-v"]["black-white"][
      "animated"
    ]["front_default"] || pokemonOne["sprites"]["front_default"];

  gifPokemon.src = mainImage || "../../src/images/pokebola.png";

  const divTypes = document.createElement("div");
  divTypes.classList.add("divTypes");

  types = types || [];
  types.map(({ type }) => {
    let spanElement = document.createElement("span");
    spanElement.classList.add("spanElement");

    switch (type.name) {
      case "bug":
        spanElement.classList.add("spanBug");
        break;
      case "dark":
        spanElement.classList.add("spanDark");
        break;
      case "dragon":
        spanElement.classList.add("spanDragon");
        break;
      case "electric":
        spanElement.classList.add("spanElectric");
        break;
      case "fire":
        spanElement.classList.add("spanFire");
        break;
      case "fairy":
        spanElement.classList.add("spanFairy");
        break;
      case "fighting":
        spanElement.classList.add("spanFighting");
        break;
      case "flying":
        spanElement.classList.add("spanFlying");
        break;
      case "grass":
        spanElement.classList.add("spanGrass");
        break;
      case "ghost":
        spanElement.classList.add("spanGhost");
        break;
      case "ground":
        spanElement.classList.add("spanGround");
        break;
      case "ice":
        spanElement.classList.add("spanIce");
        break;
      case "poison":
        spanElement.classList.add("spanPoison");
        break;
      case "psychic":
        spanElement.classList.add("spanPsychic");
        break;
      case "rock":
        spanElement.classList.add("spanRock");
        break;
      case "steel":
        spanElement.classList.add("spanSteel");
        break;
      case "normal":
        spanElement.classList.add("spanNormal");
        break;
      case "water":
        spanElement.classList.add("spanWater");
        break;
      default:
        break;
    }

    spanElement.innerHTML = type.name;
    divTypes.appendChild(spanElement);
  });

  const cardTitle = document.createElement("h1");
  cardTitle.classList.add("cardTitle");

  const pokemonName = document.createElement("span");
  const pokemonNumber = document.createElement("span");
  pokemonName.classList.add("pokemonName");
  pokemonNumber.classList.add("pokemonNumber");

  const buttonInfo = document.createElement("a");
  buttonInfo.href = `src/pages/details.html?pokemonId=${id}`
  buttonInfo.classList.add("buttonInfo");
  buttonInfo.textContent = "Details";

  pokemonNumber.textContent = `${id.toString().padStart(4, "0")}- `;
  pokemonName.textContent = pokemon.name;

  cardTitle.append(pokemonNumber);
  cardTitle.append(pokemonName);

  cardBody.appendChild(divTypes);
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
