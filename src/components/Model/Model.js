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
      <div>
        <h1>Model: {model.name}</h1>
        <div className="box">
          <div className="padded">
            <h5>Name</h5>
            <div>{model.name}</div>
            <h5>Fields</h5>
            {model.fields.map(field => (
              <div key={field.id}>
                <div>{field.name}</div>
                <ul>
                  <li>Type: {field.type}</li>
                  {field.allowNull !== null && (
                    <li>allowNull: {field.allowNull.toString()}</li>
                  )}
                  {field.defaultValue !== null && (
                    <li>defaultValue: {field.defaultValue.toString()}</li>
                  )}
                  {field.validations !== null && (
                    <li>validations: {field.validations.toString()}</li>
                  )}
                </ul>
              </div>
            ))}
            <br />
            <button
              className="btn btn-default"
              onClick={() => this.edit(model)}
            >
              Edit
            </button>
            <span> </span>
            <button
              className="btn btn-negative"
              onClick={() => this.delete(model)}
            >
              Delete
            </button>
          </div>
        </div>{' '}
      </div>
    )
  }
}

Model = connect(mapStateToProps)(Model)

export default Model
