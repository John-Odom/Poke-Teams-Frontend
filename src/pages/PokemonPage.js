import React from 'react'
import PokemonContainer from '../containers/PokemonContainer'
import PokemonArmy from '../containers/PokemonArmy'
import { Search } from 'semantic-ui-react'
import AddArmyToDatabaseForm from '../cards/AddArmyToDatabaseForm'
export default class PokemonPage extends React.Component{
    
    
    state={
        pokemonList:[],
        search:"",
        pokemonArmy:[],
        armyName:""
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/pokemons")
        .then(res=>res.json())
        .then(pokemons => this.setState({pokemonList: pokemons}))
    }

    changeArmyName = (value) => {
        this.setState({armyName:value})
    }

    handleArmySubmit = () =>{
        if(this.state.pokemonArmy.length===6 && this.state.armyName!==""){
        this.postArmyToDB()
        } else if (this.state.pokemonArmy.length===6){
            alert("you need a name dog")
        } else {
            alert("gotta have six mainnnn")
        }
    }

    postArmyToDB = () => {
        const formData={
            name: this.state.armyName,
            user_id: 0,
            pokemons:this.state.pokemonArmy
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
        this.setState({pokemonArmy:[], armyName:"", search:""})
    }
    addToArmy = (pokemon) => {
        if(this.state.pokemonArmy.length > 5){
            return null
        } else {
            this.handlePokemonClick(pokemon)
        }
    }

    removeFromArmy = (pokemon) => {
        let filteredPokemon = this.state.pokemonArmy.filter(pokeSoldier => {
            return pokeSoldier !== pokemon
        })
        this.setState({pokemonArmy: filteredPokemon})
    }

    handlePokemonClick = (pokemon) => {
        if(this.state.pokemonArmy.includes(pokemon)) {
            return null
        } else { 
            this.setState({pokemonArmy: [...this.state.pokemonArmy, pokemon]})
        }
    }

    getSearchValue = (value) => {
        this.setState({search: value})
        this.filterPokemon()
    }

    filterPokemon = () => {
        let filteredPokemon = this.state.pokemonList.filter (pokemon => {
            return pokemon.name.startsWith(this.state.search)
        })
        return filteredPokemon
    }

    callList = () => {
        return this.state.search ? this.filterPokemon() : this.state.pokemonList 
    }

    render(){
        return(
            <div className="pokemon-page">
                <AddArmyToDatabaseForm handleArmySubmit={this.handleArmySubmit} changeArmyName={this.changeArmyName} armyName={this.state.armyName}/>
                <PokemonArmy addToArmy={this.removeFromArmy} pokemonArmy={this.state.pokemonArmy}/>
                <Search onSearchChange={(e)=>this.getSearchValue(e.target.value)} showNoResults={false} value={this.state.search} className="searchbar"/>
                <PokemonContainer addToArmy={this.addToArmy} pokemonList={this.callList()}/>
            </div>
        )
    }
}