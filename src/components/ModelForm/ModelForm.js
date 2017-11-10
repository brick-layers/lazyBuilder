import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Prompt } from 'react-router-dom'
import deepEqual from 'deep-equal'

import { TextInput, SelectBox, resetUID } from '../inputs.js'
import { actions } from './component.js'

const mapStateToProps = state => {
  return {
    ...state.ModelForm
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveSettings: settings => {
      dispatch(actions.saveSettings(settings))
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
  }
  reset = () => {
    this.setState(this.originalState)
  }

  save = () => {
    this.originalState = this.state
    this.props.saveSettings(this.state)
  }
  render() {
    return (
      <div className="box">
        <Prompt
          when={!deepEqual(this.state, this.originalState)}
          message="You have unsaved changes in your form. Are you sure you wish to leave?"
        />
        <div className="padded">
          <TextInput
            label="Model Name"
            placeholder="What would you like to call your model?"
            value={this.state.name}
            onChange={value => {
              this.setState({ name: value })
            }}
          />
          <TextInput
            label="Database Port"
            placeholder="What port would you like to use?"
            value={this.state.port}
            onChange={value => {
              this.setState({ port: value })
            }}
          />
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
