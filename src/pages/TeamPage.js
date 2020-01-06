import React from 'react'
import PokemonTeam from '../containers/PokemonTeam'
import Navbar from '../containers/NavBar'
import {DATABASE} from '../SiteURLs'

export default class TeamPage extends React.Component{
    state={
        teamsList:[]
    }

    componentDidMount = () => {
        fetch(DATABASE + "teams")
        .then(res=>res.json())
        .then(teams=> this.setState({teamsList: teams}))
    }

    render(){
        return(
        <div>
            <Navbar />
            <div id="teams-page">
                {this.state.teamsList.map(team => {
                    return < PokemonTeam key={team.id} team={team} />
                })}
            </div>
        </div>
        )
    }
}