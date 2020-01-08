import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchArmy} from '../actions/fetches'
import chosenArmy from '../actions/chosenArmy'
import PokemonTeam from '../containers/PokemonTeam'
import Navbar from '../containers/NavBar'


class OneTeamPage extends Component {

    componentDidMount () {
        const armyId = this.props.match.params.id
        fetchArmy(armyId)
        .then((army) => {
            this.props.chosenArmy(army)
         })
      }
      
    render() {
        
        if(this.props.army){
            return (
                <div>
                    <Navbar />
                    <h1>Click on Pokemon to open a new page with their information</h1>
                    <div id="teams-page">
                        < PokemonTeam team={this.props.army} />
                    </div>
                </div>
                
            );
        } else return null

    }
}

const mapStatetoProps = state => {
    return ({
      army: state.chosenArmy
    })
 }

export default connect(mapStatetoProps,{chosenArmy})(OneTeamPage);