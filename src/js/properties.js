import { fethPokemon } from "./fechFunctions.js"

const loadPokamonDetails = async () =>{
    const pokemon = await fethPokemon('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log(pokemon)
    console.log("pokemon.abilities: ", pokemon.abilities)
    
}

loadPokamonDetails()