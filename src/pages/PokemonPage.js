import React from 'react'
import PokemonContainer from '../containers/PokemonContainer'
import PokemonArmy from '../containers/PokemonArmy'
import { Search } from 'semantic-ui-react'
import AddArmyToDatabaseForm from '../cards/AddArmyToDatabaseForm'
import NavBar from '../containers/NavBar'
import {connect} from 'react-redux'
import setPokemons from '../actions/setPokemons'
import clearArmy from '../actions/ClearArmy'
import search from '../actions/Search'
import {getPokemon, postArmyToDB} from '../actions/fetches'
import {withRouter} from 'react-router-dom'
import {TEAMSPAGE} from '../routePaths'

class PokemonPage extends React.Component{
    state={
        armyName:""
    }

    componentDidMount = () => {
        getPokemon().then(pokemons => this.props.setPokemon(pokemons))
    }

    changeArmyName = (value) => {
        this.setState({armyName:value})
    }

    handleArmySubmit = () =>{
        if(this.props.pokemonArmy.length===6 && this.state.armyName!==""){
            postArmyToDB(this.state.armyName, this.props.pokemonArmy)
            this.clearPage()
            this.props.history.push(TEAMSPAGE)
        } else if (this.props.pokemonArmy.length===6) alert("you need a name dog")
          else alert("gotta have six mainnnn")
    }

    clearPage = () =>{
        this.setState({ armyName:""})
        this.props.clearArmy()
        this.props.search("")
    }

    getSearchValue = (value) => {
        this.props.search(value)
        this.filterPokemon()
    }

    filterPokemon = () => {
        let filteredPokemon = this.props.pokemons.filter (pokemon => {
            return pokemon.name.startsWith(this.props.searchBar.toLowerCase())
        })
        return filteredPokemon
    }

    sortedOrNah = () => {
        return this.props.pokemons[0].name === "abra" ? null : this.props.pokemons
    }

    callList = () => {
        return this.props.searchBar ? this.filterPokemon() : this.props.pokemons 
    }

    render(){
        return(
            <div className="pokemon-page">
                <AddArmyToDatabaseForm handleArmySubmit={this.handleArmySubmit} 
                changeArmyName={this.changeArmyName} armyName={this.state.armyName}/>
                <PokemonArmy />
                <Search onSearchChange={(e)=>this.getSearchValue(e.target.value)} 
                showNoResults={false} value={this.props.searchBar} className="searchbar"/>
                <PokemonContainer pokemonList={this.callList()}/>
                <NavBar />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setPokemon: (pokemons)=>{
            dispatch(setPokemons(pokemons))
        },
        clearArmy: () => {
            dispatch(clearArmy())
        },
        search: (value) => {
            dispatch(search(value))
        }
    })
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        pokemonArmy: state.pokemonArmy,
        searchBar: state.search
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PokemonPage));