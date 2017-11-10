import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './component.js'
import { history } from '../components.js'

const mapStateToProps = state => {
  return {
    ...state.Database
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dummyAction: () => {
      dispatch(actions.dummyAction())
    }
  }
}
function Database(props) {
  return (
    <div className="box">
      <div className="padded">
        <h5>Database Name</h5>
        <div>{props.name}</div>
        <h5>Database Type</h5>
        <div>{props.type}</div>
        <h5>Database Port</h5>
        <div>{props.port}</div>
        <br />
        <button
          className="btn btn-default"
          onClick={() => history.push('/database-add')}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

Database = connect(mapStateToProps, mapDispatchToProps)(Database)

export default Database
