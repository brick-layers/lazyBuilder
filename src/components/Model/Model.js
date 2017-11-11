import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store } from '../components.js'

const mapStateToProps = state => {
  return {
    ...state.Models
  }
}

class Model extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const name = this.props.match.params.name
    const model = this.props.models.find(model => model.name === name)
    if (!model) return <div>This is not the model you are looking for...</div>
    return (
      <div className="box">
        <div className="padded">
          <h5>Model Name</h5>
          <div>{model.name}</div>
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
}

Model = connect(mapStateToProps)(Model)

export default Model
