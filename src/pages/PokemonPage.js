import React from 'react'
import PokemonContainer from '../containers/PokemonContainer'
import PokemonArmy from '../containers/PokemonArmy'
import { Search } from 'semantic-ui-react'
import AddArmyToDatabaseForm from '../cards/AddArmyToDatabaseForm'
import NavBar from '../containers/NavBar'
import {connect} from 'react-redux'
import fetchPokemons from '../actions/FetchPokemons'
import clearArmy from '../actions/ClearArmy'
import search from '../actions/Search'



class PokemonPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            // search:"",
            armyName:""
        }
    } 

    componentDidMount = () => {
        fetch("http://localhost:3000/pokemons")
        .then(res=>res.json())
        .then(pokemons => {
            this.props.fetchPokemon(pokemons)
        })
    }

    changeArmyName = (value) => {
        this.setState({armyName:value})
    }

    handleArmySubmit = () =>{
        if(this.props.pokemonArmy.length===6 && this.state.armyName!==""){
        this.postArmyToDB()
        } else if (this.props.pokemonArmy.length===6){
            alert("you need a name dog")
        } else {
            alert("gotta have six mainnnn")
        }
    }

    postArmyToDB = () => {
        const formData={
            name: this.state.armyName,
            user_id: 0,
            pokemons:this.props.pokemonArmy
        }
        const reqObj={
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify (formData)
        }
        fetch("http://localhost:3000/teams", reqObj)
        .then(res=>res.json())
        .then(team => {
            alert(`You saved "${team.name}" to the database`)
            this.clearPage()
        })
    }

    clearPage = () =>{
        this.setState({ armyName:""})
        this.props.clearArmy()
        this.props.search("")
    }

    getSearchValue = (value) => {
        // this.setState({search: value})
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
        fetchPokemon: (pokemons)=>{
            dispatch(fetchPokemons(pokemons))
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(PokemonPage)