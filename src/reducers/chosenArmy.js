import { CHOSEN_ARMY } from "../actions/types"

export default function chosenArmy (state = {}, action) {
    switch (action.type) {
      case CHOSEN_ARMY:
        return(
          state=action.data
        )
      default:
        return state
    }
  }