import {SET_POKEMON} from './types'

export default function setPokemon(pokemons){
    return { 
            type: SET_POKEMON,
            pokemons
    }
}