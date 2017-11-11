// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('Associations')

import _ from 'lodash'
// Include component
import component from './Associations.js'

// Action Definitions
const ADD_ASSOCIATION = reduxUtil.defineAction('ADD_ASSOCIATION')
const REMOVE_ASSOCIATION = reduxUtil.defineAction('REMOVE_ASSOCIATION')
const EDIT_ASSOCIATION = reduxUtil.defineAction('EDIT_ASSOCIATION')

// Initial State
const initialState = {
  associations: []
}

// Make Actions
const actions = {
  addAssociation: reduxUtil.createAction(ADD_ASSOCIATION),
  removeAssociation: reduxUtil.createAction(REMOVE_ASSOCIATION),
  editAssociation: reduxUtil.createAction(EDIT_ASSOCIATION)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [ADD_ASSOCIATION]: function(state, action) {
      let found = false
      let newState = { ...state }
      newState.associations.forEach((association, index) => {
        if (_.isEqual(association, action.payload)) {
          found = true
        }
      })
      if (!found) newState.associations.push(action.payload)
      return newState
    },
    [REMOVE_ASSOCIATION]: function(state, action) {
      let newState = { ...state }
      newState.associations.forEach((association, index) => {
        if (_.isEqual(association, action.payload)) {
          console.log('FOUND @', index)
          newState.associations.splice(index, 1)
        }
      })
      return newState
    },
    [EDIT_ASSOCIATION]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
