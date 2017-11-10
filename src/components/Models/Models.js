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
        <div>Models -- Stateful w/ Redux</div>
        {this.props.models.map(model => (
          <div key={model.name}>{model.name}</div>
        ))}
      </div>
    )
  }
}

Models = connect(mapStateToProps, mapDispatchToProps)(Models)

export default Models
