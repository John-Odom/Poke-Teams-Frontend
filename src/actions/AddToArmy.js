import {ADD_TO_ARMY} from './types'

export default function addPokemonToArmy(pokemon){
    return { 
            type: ADD_TO_ARMY,
            pokemon
    }
}