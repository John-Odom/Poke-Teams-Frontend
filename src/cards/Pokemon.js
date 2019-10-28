import React from 'react'
import addToArmy from '../actions/AddToArmy'
import removeFromArmy from '../actions/RemoveFromArmy'
import {connect} from 'react-redux'


class Pokemon extends React.Component{

    addToArmy = (pokemon) => {
        if(this.props.pokemonArmy.length > 5){
            return null
        } else {
            this.props.addToArmy(pokemon)
        }
    }

    handlePokemonClick = (pokemon) => {
        if(this.props.pokemonArmy.includes(pokemon)) {
            this.props.removeFromArmy(pokemon)
        } else { 
            this.addToArmy(pokemon)
        }
    }

    render() {
    return (
        <div className="pokemon-div" onClick={() => {this.handlePokemonClick(this.props.pokemon)}}>
            <img className="pokemon-image" src={this.props.pokemon.image} alt=""/>
            <p>{this.props.pokemon.name}</p>
            <p>experience: {this.props.pokemon.experience}</p>
            <p>type: {this.props.pokemon.poketype}</p>
        </div>
    )
}}

const mapDispatchToProps = (dispatch) => {
    return ({
        addToArmy: (pokemon) => {
            dispatch(addToArmy(pokemon))
        },
        removeFromArmy: (pokemon) => {
            dispatch(removeFromArmy(pokemon))
        }
    })
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        pokemonArmy: state.pokemonArmy
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Pokemon)
