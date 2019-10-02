import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar" class="ui form">
        <NavLink 
          to="/teams"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Teams</NavLink>
        <NavLink
          to="/teams/new"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >New Team</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Login</NavLink>
      </div>
    )
  }
}
 
export default Navbar;