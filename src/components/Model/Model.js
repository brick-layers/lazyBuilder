import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './component.js'

const mapStateToProps = state => {
  return {
    ...state.Model
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dummyAction: () => {
      dispatch(actions.dummyAction())
    }
  }
}
class Model extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>Model -- Stateful w/ Redux</div>
  }
}

Model = connect(mapStateToProps, mapDispatchToProps)(Model)

export default Model
