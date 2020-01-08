import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const AddArmyToDatabaseForm = (props) => (
  <div id="army-submission-container">
  <Form  >
    <div id="army-submission-fields">
    <Form.Group>
      <label className="ui red horizontal label">Team Name</label>
      <input onChange={(e)=>props.changeArmyName(e.target.value)} value={props.armyName} />
    <Button onClick={() => props.handleArmySubmit()} type='submit'>Submit</Button>
    </Form.Group>
    </div>
  </Form>
  </div>
)

export default AddArmyToDatabaseForm