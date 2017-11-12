// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('ModelForm')

// Include component
import component from './ModelForm.js'

// Include action from Models
import { actions as modelActions } from '../Models/component.js'

// Action Definitions
const NAME_CHANGE = reduxUtil.defineAction('NAME_CHANGE')
const ADD_FIELD = reduxUtil.defineAction('ADD_FIELD')
const CLEAR_FORM = reduxUtil.defineAction('CLEAR_FORM')
const SAVE_FIELD = reduxUtil.defineAction('SAVE_FIELD')

// Initial State
const initialState = {
  name: '',
  fields: []
}

// Make Actions
const actions = {
  nameChange: reduxUtil.createAction(NAME_CHANGE),
  addField: reduxUtil.createAction(ADD_FIELD),
  clearForm: reduxUtil.createAction(CLEAR_FORM),
  saveModel: modelActions.saveModel
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [NAME_CHANGE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    },
    [ADD_FIELD]: function(state, action) {
      let newFields = state.fields.slice()
      newFields.push(action.payload)
      return { ...state, fields: newFields }
    },
    [CLEAR_FORM]: function(state, action) {
      return initialState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
