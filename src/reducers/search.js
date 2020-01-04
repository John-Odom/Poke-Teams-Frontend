import { SEARCH } from "../actions/types"

export default function pokemonList (state = "", action) {
    switch (action.type) {
      case SEARCH:
        return(
          state=action.value
        )
      default:
        return state
    }
  }