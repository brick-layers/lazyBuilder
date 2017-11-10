// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('ModelForm')

// Include component
import component from './ModelForm.js'

// Action Definitions
const NAME_CHANGE = reduxUtil.defineAction('NAME_CHANGE')

// Initial State
const initialState = {
  name: '',
  fields: []
}

// Make Actions
const actions = {
  nameChange: reduxUtil.createAction(NAME_CHANGE)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [NAME_CHANGE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
