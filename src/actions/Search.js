import {SEARCH} from './types'

export default function search(value){
    return { 
            type: SEARCH,
            value
    }
}