import {FETCH_POKEMON} from './types'

export default function fetchPokemon(pokemons){
    return { 
            type: FETCH_POKEMON,
            pokemons
    }
}