// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('Associations')

// Include component
import component from './Associations.js'

// Action Definitions
const DUMMY_ACTION = reduxUtil.defineAction('DUMMY_ACTION')
const ADD_ASSOCIATION = reduxUtil.defineAction('ADD_ASSOCIATION')
const REMOVE_ASSOCIATION = reduxUtil.defineAction('REMOVE_ASSOCIATION')
const EDIT_ASSOCIATION = reduxUtil.defineAction('EDIT_ASSOCIATION')

// Initial State
const initialState = {
  associations: []
}

// Make Actions
const actions = {
  dummyAction: reduxUtil.createAction(DUMMY_ACTION),
  addAssociation: reduxUtil.createAction(ADD_ASSOCIATION),
  removeAssociation: reduxUtil.createAction(REMOVE_ASSOCIATION),
  editAssociation: reduxUtil.createAction(EDIT_ASSOCIATION)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [ADD_ASSOCIATION]: function(state, action) {
      let newState = { ...state, ...action.payload }
      newState.dummyState = true
      return newState
    },
    [REMOVE_ASSOCIATION]: function(state, action) {
      let newState = { ...state, ...action.payload }
      newState.dummyState = true
      return newState
    },
    [EDIT_ASSOCIATION]: function(state, action) {
      let newState = { ...state, ...action.payload }
      newState.dummyState = true
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
