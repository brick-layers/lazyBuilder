// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('ModelForm')

// Include component
import component from './ModelForm.js'

// Action Definitions
const SAVE_SETTINGS = reduxUtil.defineAction('SAVE_SETTINGS')

// Initial State
const initialState = {
  name: '',
  fields: []
}

// Make Actions
const actions = {
  saveSettings: reduxUtil.createAction(SAVE_SETTINGS)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [SAVE_SETTINGS]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
