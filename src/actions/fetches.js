import {DATABASE} from '../SiteURLs'
export const fetchArmy = (teamId) =>{
    return fetch(DATABASE + 'teams/' + teamId).then(res=>res.json())
}