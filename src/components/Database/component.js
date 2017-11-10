// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('Database')

// Include component
import component from './Database.js'

// Action Definitions
const SAVE_DATABASE = reduxUtil.defineAction('SAVE_DATABASE')

// Initial State
const initialState = {
  name: '',
  type: '',
  port: ''
}

// Make Actions
const actions = {
  saveDatabase: reduxUtil.createAction(SAVE_DATABASE)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [SAVE_DATABASE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
