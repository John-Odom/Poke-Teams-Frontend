import React from 'react'
import Pokemon from '../cards/Pokemon'
import {SITEURL} from '../SiteURLs'

export default class PokemonTeam extends React.Component {

    render () {
        if(this.props.team){
          return (
            <div className="team-army"> 
            {/* <br /> */}
              <h3><a href={SITEURL + 'teams/' + this.props.team.id}>{this.props.team.name}</a> 
                    <a className="top-tag" href="#navbar">Back to top of page</a></h3>
                    <div className="poketeams">
                    {this.props.team.pokemons.map( pokemon => {
                        return (
                            <Pokemon addToArmy={this.props.showPokemon} pokemon={pokemon} 
                            key={`${this.props.team.id}${pokemon.id}`}/>
                        )
                    })} 
                    </div>
                </div>
            )
        } else return null
    }}
