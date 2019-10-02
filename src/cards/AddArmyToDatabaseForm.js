import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import NavBar from '../containers/NavBar'

const AddArmyToDatabaseForm = (props) => (
  <div id="army-submission-container">
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
  </div>
)

export default AddArmyToDatabaseForm