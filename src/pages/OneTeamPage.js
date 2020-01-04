import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchArmy} from '../actions/fetches'
import chosenArmy from '../actions/chosenArmy'


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
        return (
        <p>in page</p>
        );
    }
}

export default connect(null,{chosenArmy})(OneTeamPage);