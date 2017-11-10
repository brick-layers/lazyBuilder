import React, { Component } from 'react'

import { TextInput, SelectBox, resetUID } from '../inputs.js'

class ModelField extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <TextInput
          label="Name"
          placeholder="Field name?"
          value={this.props.name}
          onChange={value => {
            this.props.nameChange({ name: value })
          }}
        />
        <SelectBox
          label="Type"
          value={this.props.type}
          onChange={value => {
            this.props.typeChange({ type: value })
          }}
          options={[
            { value: 'STRING', label: 'STRING' },
            { value: 'CHAR', label: 'CHAR' },
            { value: 'TEXT', label: 'TEXT' },
            { value: 'INTEGER', label: 'INTEGER' },
            { value: 'FLOAT', label: 'FLOAT' },
            { value: 'DOUBLE', label: 'DOUBLE' },
            { value: 'DECIMAL', label: 'DECIMAL' },
            { value: 'REAL', label: 'REAL' },
            { value: 'ENUM', label: 'BOOLEAN' },
            { value: 'DATE', label: 'DATE' },
            { value: 'JSON', label: 'JSON' },
            { value: 'ARRAY', label: 'ARRAY' },
            { value: 'VIRTUAL', label: 'VIRTUAL' }
          ]}
        />
      </div>
    )
  }
}

export default ModelField
