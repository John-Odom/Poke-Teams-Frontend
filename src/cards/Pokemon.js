import React from 'react'

class Pokemon extends React.Component{
    render() {
    return (
        <div className="pokemon-div" onClick={() => {this.props.addToArmy(this.props.pokemon)}}>
            <img className="pokemon-image" src={this.props.pokemon.image}/>
            <p>{this.props.pokemon.name}</p>
            <p>experience: {this.props.pokemon.experience}</p>
            <p>type: {this.props.pokemon.poketype}</p>

        </div>
    )
}}
export default Pokemon