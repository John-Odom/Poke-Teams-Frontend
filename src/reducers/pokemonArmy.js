import { ADD_TO_ARMY } from "../actions/types"
import { REMOVE_FROM_ARMY } from "../actions/types"
import { CLEAR_ARMY } from "../actions/types"


export default function pokemonList (state = [], action) {
    switch (action.type) {
      case ADD_TO_ARMY:
        return(
          state.concat(action.pokemon)
        )
        case REMOVE_FROM_ARMY:
          const indexToRemove = state.indexOf(action.pokemon)
        return(
          [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)]
        )
        case CLEAR_ARMY:
        return(
          [...state.slice(7)]
        )
      default:
        return state
    }
  }