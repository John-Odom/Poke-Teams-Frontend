import React from 'react'
import Pokemon from '../cards/Pokemon'



export default class PokemonArmy extends React.Component {

    render () {
    return (
            <div className="pokemon-army">
            {this.props.pokemonArmy.map( pokemon => {
                return <Pokemon addToArmy={this.props.addToArmy} pokemon={pokemon}/>
            })} 
            </div>
    )
}}
