// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('Drag')

// Include component
import component from './Drag.js'

// Action Definitions
const DUMMY_ACTION = reduxUtil.defineAction('DUMMY_ACTION')
const SET_INPUT = reduxUtil.defineAction('SET_INPUT')
const SET_OUTPUT = reduxUtil.defineAction('SET_OUTPUT')
const COMPLETE = reduxUtil.defineAction('COMPLETE')

// Initial State
const initialState = {
  dummyState: false,
  inputFile: null,
  outputPath: null,
  complete: false
}

// Make Actions
const actions = {
  dummyAction: reduxUtil.createAction(DUMMY_ACTION),
  setInputFile: reduxUtil.createAction(SET_INPUT),
  setOutputPath: reduxUtil.createAction(SET_OUTPUT),
  completeLay: reduxUtil.createAction(COMPLETE)
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [DUMMY_ACTION]: function(state, action) {
      let newState = { ...state, ...action.payload }
      newState.dummyState = true
      return newState
    },
    [SET_OUTPUT]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    },
    [SET_INPUT]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    },
    [COMPLETE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
