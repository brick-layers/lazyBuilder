import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Prompt } from 'react-router-dom'
import deepEqual from 'deep-equal'

import { TextInput, SelectBox, resetUID } from '../inputs.js'
import { actions } from './component.js'
import { history } from '../components.js'
import ModelField from '../ModelField/ModelField.js'

const mapStateToProps = state => {
  return {
    ...state.ModelForm
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveModel: model => {
      dispatch(actions.saveModel(model))
    },
    nameChange: name => {
      dispatch(actions.nameChange(name))
    },
    addField: field => {
      dispatch(actions.addField(field))
    },
    clearForm: () => {
      dispatch(actions.clearForm())
    }
  }
}
class ModelForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      fields: props.fields
    }
    this.fieldCount = 0
    this.originalState = this.state
  }

  addField = () => {
    this.props.addField({ id: this.fieldCount })
    this.fieldCount++
  }
  clear = () => {
    this.props.clearForm()
  }
  reset = () => {
    this.props.nameChange({ name: this.state.name })
  }
  save = () => {
    this.props.saveModel({
      name: this.props.name,
      fields: this.props.fields
    })
    this.reset()
    history.push(`/model/${this.props.name}`)
  }

  render() {
    console.log(this.props)
    return (
      <div className="box">
        <div className="padded">
          <TextInput
            label="Model Name"
            placeholder="What would you like to call your model?"
            value={this.props.name}
            onChange={value => {
              this.props.nameChange({ name: value })
            }}
          />
          {this.props.fields.map(field => [
            <br />,
            <ModelField key={field.id} field={field} />
          ])}
          <br />
          <button className="btn btn-default" onClick={this.addField}>
            Add Field
          </button>
          <br />
          <br />
          <button className="btn btn-default" onClick={this.clear}>
            Clear
          </button>{' '}
          <button className="btn btn-default" onClick={this.reset}>
            Reset
          </button>{' '}
          <button className="btn btn-primary" onClick={this.save}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

ModelForm = connect(mapStateToProps, mapDispatchToProps)(ModelForm)

export default ModelForm
