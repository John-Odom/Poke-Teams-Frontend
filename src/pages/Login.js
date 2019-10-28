import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import NavBar from '../containers/NavBar'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state={
      username: "",
      password: ""
  }
  
handleInput=(target)=>{
    if(target.name==="username"){
        this.setState({username: target.value})
    } else if (target.name==="password"){
        this.setState({password: target.value})
    }
}

logPersonIn = () => {
    
}

  render() {
      return(
  <div id="login-form-container">
      
    <Form id="login-form">
      <Form.Group>
        <label className="ui red horizontal label">Username</label>
        <input onChange={(e)=>this.handleInput(e.target)} name="username" value={this.state.username} />
        </Form.Group>
        <Form.Group>
        <label className="ui red horizontal label">Password</label>
        <input onChange={(e)=>this.handleInput(e.target)} name="password" value={this.state.password} />
        </Form.Group>
        <Form.Group>
            <Link to="/">
      <Button onClick={() => this.logPersonIn()} type='submit'>Submit</Button>
        </Link>
      </Form.Group>
    </Form>
    <NavBar />
  </div>
)}}

export default Login
