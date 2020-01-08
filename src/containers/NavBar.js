import React from 'react'
import { NavLink } from 'react-router-dom';
import {POKEMONPAGE, TEAMSPAGE, HOMEPAGE, LOGINPAGE} from '../routePaths'
 
class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar" className="ui form">
        <NavLink to={HOMEPAGE} className='nav-link'>Home</NavLink>
        <NavLink to={TEAMSPAGE}className='nav-link'> Teams </NavLink>
        <NavLink to={POKEMONPAGE} className='nav-link'>New Team</NavLink>
        <NavLink to={LOGINPAGE} className='nav-link'>Login</NavLink>
      </div>
    )
  }
}
 
export default Navbar;