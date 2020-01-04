import { combineReducers } from 'redux'
import pokemonArmy from './pokemonArmy'
import pokemons from './pokemonList'
import search from './search'
import chosenArmy from './chosenArmy'



export default combineReducers({
  pokemonArmy,
  pokemons,
  search,
  chosenArmy
})