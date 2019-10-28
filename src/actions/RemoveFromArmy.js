import {REMOVE_FROM_ARMY} from './types'

export default function removeFromArmy(pokemon){
    return { 
            type: REMOVE_FROM_ARMY,
            pokemon
    }
}