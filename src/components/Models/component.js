// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('Models')

// Include component
import component from './Models.js'

// Action Definitions
const SAVE_MODEL = reduxUtil.defineAction('SAVE_MODEL')

// Initial State
const initialState = {
  models: []
}

// Make Actions
const actions = {
  saveModel: reduxUtil.createAction(SAVE_MODEL)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [SAVE_MODEL]: function(state, action) {
      let newState = { ...state }
      const index = newState.models
        .map(mod => mod.name)
        .indexOf(action.payload.name)

      // If model with same name exists overwrite it
      if (index === -1) {
        newState.models.push(action.payload)
      } else {
        newState.models[index] = action.payload
      }

      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
