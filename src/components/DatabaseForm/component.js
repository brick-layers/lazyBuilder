// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('DatabaseForm')

// Include component
import component from './DatabaseForm.js'

// Action Definitions
const NAME_CHANGE = reduxUtil.defineAction('NAME_CHANGE')
const TYPE_CHANGE = reduxUtil.defineAction('TYPE_CHANGE')
const PORT_CHANGE = reduxUtil.defineAction('PORT_CHANGE')

// Initial State
const initialState = {
  name: '',
  type: 'PostgreSQL',
  port: '5432'
}

// Make Actions
const actions = {
  nameChange: reduxUtil.createAction(NAME_CHANGE),
  typeChange: reduxUtil.createAction(TYPE_CHANGE),
  portChange: reduxUtil.createAction(PORT_CHANGE)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [NAME_CHANGE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    },
    [TYPE_CHANGE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    },
    [PORT_CHANGE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
