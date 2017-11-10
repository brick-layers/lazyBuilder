import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Prompt } from 'react-router-dom'
import deepEqual from 'deep-equal'

import { TextInput, SelectBox, resetUID } from '../inputs.js'
import { actions } from './component.js'
import { actions as dbActions } from '../Database/component.js'
import { history } from '../components.js'

const mapStateToProps = state => {
  return {
    ...state.DatabaseForm
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveDatabase: db => {
      dispatch(dbActions.saveDatabase(db))
    },
    nameChange: name => {
      dispatch(actions.nameChange(name))
    },
    typeChange: type => {
      dispatch(actions.typeChange(type))
    },
    portChange: port => {
      dispatch(actions.portChange(port))
    }
  }
}

class DatabaseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      type: props.type,
      port: props.port
    }
    this.originalState = this.state
    resetUID()
  }

  reset = () => {
    this.props.nameChange({ name: this.state.name })
    this.props.typeChange({ type: this.state.type })
    this.props.portChange({ port: this.state.port })
  }

  save = () => {
    this.props.saveDatabase({
      name: this.props.name,
      type: this.props.type,
      port: this.props.port
    })
    history.push('/database')
  }

  render() {
    return (
      <div className="box">
        <div className="padded">
          <TextInput
            label="Database Name"
            placeholder="What would you like to call your database?"
            value={this.props.name}
            onChange={value => {
              this.props.nameChange({ name: value })
            }}
          />
          <SelectBox
            label="Database Type"
            value={this.props.type}
            onChange={value => {
              this.props.typeChange({ type: value })
            }}
            options={[
              { value: 'PostgreSQL', label: 'PostgreSQL' },
              { value: 'MySQL', label: 'MySQL' },
              { value: 'SQLite', label: 'SQLite' }
            ]}
          />
          <TextInput
            label="Database Port"
            placeholder="What port would you like to use?"
            value={this.props.port}
            onChange={value => {
              this.props.portChange({ port: value })
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

DatabaseForm = connect(mapStateToProps, mapDispatchToProps)(DatabaseForm)

export default DatabaseForm
