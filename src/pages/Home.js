import React from 'react'
import Navbar from '../containers/NavBar'
import { Link } from 'react-router-dom';


class Home extends React.Component{

    sendHome = ()=>{

    }
    render() {
    return (
        <div id="home-page" >
            <Navbar />
            <div id="welcome-div">
                <h1 id="welcome-text" onClick={()=> this.sendHome()}>Welcome to Poketeam Builder - Build your POKETEAM!</h1>
            </div>
            <div id="home-page-link-options">
                <div>
            <Link to="teams">See our teams!</Link>
            </div>
            <div>
            <Link to="teams/new">Make a new Team!</Link>
            </div>
            </div>
        </div>
    )
}}
export default Home