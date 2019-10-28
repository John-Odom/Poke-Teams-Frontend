import { combineReducers } from 'redux'
import pokemonArmy from './pokemonArmy'
import pokemons from './pokemonList'

export default combineReducers({
  pokemonArmy,
  pokemons
})