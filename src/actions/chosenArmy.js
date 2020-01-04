import {CHOSEN_ARMY} from './types'

export default function chosenArmy(data){
    return { 
            type: CHOSEN_ARMY,
            data
    }
}