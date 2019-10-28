import { FETCH_POKEMON } from "../actions/types"

export default function pokemonList (state = [], action) {
    switch (action.type) {
      case FETCH_POKEMON:
        return(
          state.concat(action.pokemons)
        )
      default:
        return state
    }
  }