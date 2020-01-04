const LOCAL = 'http://localhost:3000'
export const fetchArmy = (teamId) =>{
    return fetch(LOCAL + '/teams/' + teamId).then(res=>res.json())
}