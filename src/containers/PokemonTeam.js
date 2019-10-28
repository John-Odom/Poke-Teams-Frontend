import React from 'react'
import Pokemon from '../cards/Pokemon'



export default class PokemonTeam extends React.Component {

    render () {
    return (
            <div className="team-army">
                <br />
                <h3>{this.props.team.name} <a class="top-tag" href="#navbar">Back to top of page</a></h3>
                <div className="poketeams">
                {this.props.team.pokemons.map( pokemon => {
                return <Pokemon addToArmy={this.props.showPokemon} pokemon={pokemon}/>
            })} 
                </div>
            </div>
    )
}}
