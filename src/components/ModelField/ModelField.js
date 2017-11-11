import React, { Component } from 'react'

import { TextInput, SelectBox, resetUID } from '../inputs.js'

class ModelField extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="box" style={{ boxShadow: '0 0 0' }}>
        <div className="padded">
          <TextInput label="Field Name" placeholder="Field name?" />
          <SelectBox
            label="Type"
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
      </div>
    )
  }
}

export default ModelField
