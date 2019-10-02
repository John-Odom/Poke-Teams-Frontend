import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import NavBar from '../containers/NavBar'

class Login extends React.Component {
  state={
      username: "",
      password: ""
  }
  
handleInput=(target)=>{
    if(target.name=="username"){
        this.setState({username: target.value})
    } else if (target.name=="password"){
        this.setState({password: target.value})
    }
}

logPersonIn = () => {
    console.log("logged in!")
}

  render() {
      return(
  <div id="login-form-container">
      
    <Form id="login-form">
      <Form.Group>
        <label class="ui red horizontal label">Username</label>
        <input onChange={(e)=>this.handleInput(e.target)} name="username" value={this.state.username} />
        </Form.Group>
        <Form.Group>
        <label class="ui red horizontal label">Password</label>
        <input onChange={(e)=>this.handleInput(e.target)} name="password" value={this.state.password} />
        </Form.Group>
        <Form.Group>
      <Button onClick={() => this.logPersonIn()} type='submit'>Submit</Button>
      </Form.Group>
    </Form>
    <NavBar />
  </div>
)}}

export default Login

{/* <div id="army-submission-container">
<Form  >
  <div id="army-submission-fields">
  <Form.Group>
    <label class="ui red horizontal label">Team Name</label>
    <input onChange={(e)=>props.changeArmyName(e.target.value)} value={props.armyName} />
  <Button onClick={() => props.handleArmySubmit()} type='submit'>Submit</Button>
  </Form.Group>
  </div>
</Form>
<NavBar />
</div> */}