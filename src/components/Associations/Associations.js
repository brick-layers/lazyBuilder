import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './component.js'
import { history } from '../components.js'

const mapStateToProps = state => {
  return {
    ...state.Associations
  }
}
const mapDispatchToProps = dispatch => {
  return {
    delete: association => {
      dispatch(actions.removeAssociation(association))
    }
  }
}
class Associations extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.associations.length)
      return <div>No associations have been created.</div>
    return (
      <div>
        <h1>All Associations</h1>
        <div className="box">
          <div className="padded">
            {this.props.associations.map(association => {
              return (
                <div
                  className="padded"
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
                  <span> </span>
                  <button
                    onClick={() => {
                      history.push('/associations')
                      this.props.delete(association)
                    }}
                    className="btn btn-mini btn-negative"
                  >
                    Remove
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

Associations = connect(mapStateToProps, mapDispatchToProps)(Associations)

export default Associations
