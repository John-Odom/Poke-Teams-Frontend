import {DATABASE} from '../SiteURLs'

export const fetchArmy = (teamId) =>{
    return fetch(DATABASE + 'teams/' + teamId).then(res=>res.json())
}
export const fetchArmies = () => {
    return fetch(DATABASE + "teams").then(res=>res.json())
}
export const getPokemon = () => {
    return fetch(DATABASE + "pokemons").then(res=>res.json())
}

export const postArmyToDB = (armyName, pokemonArmy) => {
    const formData={
        name: armyName,
        user_id: 0,
        pokemons:pokemonArmy
    }
    const reqObj={
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify (formData)
    }
    fetch(DATABASE + "teams", reqObj)
    .then(res=>res.json())
    .then(team => {
        alert(`You saved "${team.name}" to the database`)
    })
}