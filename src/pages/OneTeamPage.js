import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchArmy} from '../actions/fetches'
import chosenArmy from '../actions/chosenArmy'
import pokeTeam from '../containers/PokemonTeam'
import Navbar from '../containers/NavBar'


class OneTeamPage extends Component {
    componentDidMount () {
        const armyId = this.props.match.params.id
        console.log(armyId)
        fetchArmy(armyId)
        .then((army) => {
            this.props.chosenArmy(army)
         })
      }
    render() {
        console.log(pokeTeam)
        if(this.props.army){
            return (
                <div>
                    <Navbar />
                    <p>{this.props.army.name}</p>
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