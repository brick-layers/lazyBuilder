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
    this.originalState = this.state
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
    history.push('/models')
  }

  render() {
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
          <ModelField />
          <button className="btn btn-default" onClick={this.reset}>
            Reset
          </button>
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