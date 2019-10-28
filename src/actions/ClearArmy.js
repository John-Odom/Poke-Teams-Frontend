import {CLEAR_ARMY} from './types'

export default function clearArmy(){
    return { 
            type: CLEAR_ARMY,
            pokemonArmy:[]
    }
}