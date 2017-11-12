import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store, history } from '../components.js'

const mapStateToProps = state => {
  return {
    ...state.Models
  }
}

class Model extends Component {
  constructor(props) {
    super(props)
  }

  edit(model) {
    history.push(`/model-edit/${model.name}`)
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
          <h5>Fields</h5>
          <ul>
            {model.fields.map(field => [
              <li key={field.id + field.name}>Name: {field.name}</li>,
              <li key={field.id + field.type}>Type: {field.type}</li>,
              <li key={field.id + field.allowNull}>
                allowNull: {field.allowNull}
              </li>
            ])}
          </ul>
          <br />
          <button className="btn btn-default" onClick={() => this.edit(model)}>
            Edit
          </button>
        </div>
      </div>
    )
  }
}

Model = connect(mapStateToProps)(Model)

export default Model
