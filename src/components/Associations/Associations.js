import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './component.js'

const mapStateToProps = state => {
  return {
    ...state.Associations
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dummyAction: () => {
      dispatch(actions.dummyAction())
    }
  }
}
class Associations extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('state:', this.props)
    if (!this.props.associations.length)
      return <div>No associations have been created.</div>
    return (
      <div>
        <h3>Associations</h3>
        <hr />
        <div>
          {this.props.associations.map(association => {
            return (
              <div
                key={`${association.sourceModel}-${association.association}-${
                  association.targetModel
                }`}
              >
                <b>{association.sourceModel} </b>
                <i>{association.association} </i>
                <b>{association.targetModel} </b>
                {association.options && (
                  <span>
                    ({association.options} : {association.optionsValue})
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

Associations = connect(mapStateToProps, mapDispatchToProps)(Associations)

export default Associations
