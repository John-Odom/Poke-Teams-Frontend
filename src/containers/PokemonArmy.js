import React from 'react'
import Pokemon from '../cards/Pokemon'
import {connect} from 'react-redux'

const PokemonArmy = (props) => {
    return (
            <div className="pokemon-army">
            {props.pokemonArmy.map( pokemon => {
                return <Pokemon pokemon={pokemon}/>
            })} 
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemonArmy: state.pokemonArmy
    }
}

export default connect(mapStateToProps,null)(PokemonArmy)