import React from 'react'
import PokemonTeam from '../containers/PokemonTeam'
import Navbar from '../containers/NavBar'



export default class TeamPage extends React.Component{
    
    
    state={
        teamsList:[]
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/teams")
        .then(res=>res.json())
        .then(teams=> this.setState({teamsList: teams}))
    }

    showPokemon = (pokemon) => {
        console.log(pokemon)
    }

    render(){
        // console.log(this.state.teamsList)
        return(
        <div>
            <Navbar />
            <div id="teams-page">
                {this.state.teamsList.map(team => {
                    return < PokemonTeam showPokemon={this.showPokemon} team={team} />
                })}
            </div>
        </div>
        )
    }
}