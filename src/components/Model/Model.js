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
            <h5 style={{ paddingLeft: '20px' }}>{model.name}</h5>
            <h5>Fields</h5>
            {model.fields.map(field => (
              <div key={field.id}>
                <h5 style={{ paddingLeft: '20px' }}>{field.name}</h5>
                <div style={{ paddingLeft: '40px' }}>Type: {field.type}</div>
                {field.allowNull !== null && (
                  <div style={{ paddingLeft: '40px' }}>
                    allowNull: {field.allowNull.toString()}
                  </div>
                )}
                {field.defaultValue !== null && (
                  <div style={{ paddingLeft: '40px' }}>
                    defaultValue: {field.defaultValue.toString()}
                  </div>
                )}
                {field.validations !== null && (
                  <div style={{ paddingLeft: '40px' }}>
                    validations: {field.validations.toString()}
                  </div>
                )}
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
