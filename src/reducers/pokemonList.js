import { SET_POKEMON } from "../actions/types"

export default function pokemonList (state = [], action) {
    switch (action.type) {
      case SET_POKEMON:
        return(
          state.concat(action.pokemons)
        )
      default:
        return state
    }
  }