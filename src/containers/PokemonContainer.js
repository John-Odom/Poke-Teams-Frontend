import React from 'react'
import Pokemon from '../cards/Pokemon'

const PokemonContainer = (props) => {
    return (
        <div className="pokemon-container">
            {props.pokemonList.map(pokemon => {
                return <Pokemon addToArmy={props.addToArmy} pokemon={pokemon}/>
            })}
        </div>
    )
}
export default PokemonContainer