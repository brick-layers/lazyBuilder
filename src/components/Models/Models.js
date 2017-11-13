import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './component.js'

const mapStateToProps = state => {
  return {
    ...state.Models
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dummyAction: () => {
      dispatch(actions.dummyAction())
    }
  }
}
class Models extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>All Models</h1>
        <hr />
        {this.props.models.map(model => <h3 key={model.name}>{model.name}</h3>)}
      </div>
    )
  }
}

Models = connect(mapStateToProps, mapDispatchToProps)(Models)

export default Models
