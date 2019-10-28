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

    render(){
        return(
        <div>
            <Navbar />
            <div id="teams-page">
                {this.state.teamsList.map(team => {
                    return < PokemonTeam team={team} />
                })}
            </div>
        </div>
        )
    }
}