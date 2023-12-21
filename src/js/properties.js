import { fethPokemon, inputSearch} from "./fechFunctions.js"
const loadPokamonDetails = async () =>{
    const params = new URLSearchParams(document.location.search);
    const pokemonId = params.get("pokemonId"); // is the string "Jonathan"
    const pokemon = await fethPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    console.log(pokemon)
    console.log("pokemon.abilities: ", pokemon.abilities)
    if(inputSearch.value == ""){
        return "";
    }
}

loadPokamonDetails()