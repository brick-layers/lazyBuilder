import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './component.js'

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
class Database extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="box">
        <div className="padded">
          <div className="form-group">
            <label>Database Name</label>
            <span>Something</span>
          </div>
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
              { value: '1', label: 'PostgreSQL' },
              { value: '2', label: 'MySQL' },
              { value: '3', label: 'SQLite' }
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

Database = connect(mapStateToProps, mapDispatchToProps)(Database)

export default Database
