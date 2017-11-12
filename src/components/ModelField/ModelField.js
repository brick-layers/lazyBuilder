import React, { Component } from 'react'

import { TextInput, SelectBox, resetUID } from '../inputs.js'

class ModelField extends Component {
  constructor(props) {
    super(props)
    this.field = this.props.field
    const local = {
      name: '',
      type: '',
      allowNull: null,
      defaultValue: null,
      validations: null
    }
    for (let p in local) this.field[p] = local[p]
  }

  nameChange = value => {
    this.field.name = value
  }
  typeChange = value => {
    this.field.type = value
  }
  allowNullChange = value => {
    this.field.allowNull = value
  }
  defaultValueChange = value => {
    this.field.defaultValue = value
  }
  validationsChange = value => {
    this.field.validations = value
  }

  render() {
    return (
      <div className="box" style={{ boxShadow: '0 0 0' }}>
        <div className="padded">
          <TextInput
            label="Field Name"
            placeholder="Field name?"
            onChange={this.nameChange}
          />
          <SelectBox
            label="Type"
            onChange={this.typeChange}
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
              { value: 'BOOLEAN', label: 'BOOLEAN' },
              { value: 'VIRTUAL', label: 'VIRTUAL' }
            ]}
          />
          {this.field.allowNull !== null && (
            <SelectBox
              label="allowNull"
              value={this.field.allowNull}
              onChange={this.allowNullChange}
              options={[
                { value: true, label: 'true' },
                { value: false, label: 'false' },
                { value: null, label: 'null' }
              ]}
            />
          )}
          {this.field.defaultValue !== null && (
            <TextInput
              label="Default Value"
              placeholder="values on values"
              value={this.field.defaultValue}
              onChange={this.defaultValueChange}
            />
          )}
          {this.field.validations !== null && (
            <TextInput
              label="Validations"
              placeholder="ex. { isEmail: true, len: [5, 30] }"
              value={this.field.validations}
              onChange={this.validationsChange}
            />
          )}
          <div className="bottom-toolbar">
            {this.field.allowNull === null && (
              <span>
                <button
                  className="btn btn-default"
                  onClick={() => this.allowNullChange(false)}
                >
                  Allow Null
                </button>
                <span> </span>
              </span>
            )}
            <button
              className="btn btn-default"
              onClick={() => this.defaultValueChange('')}
            >
              Default Value
            </button>{' '}
            <button
              className="btn btn-default"
              onClick={() => this.validationsChange('')}
            >
              Validations
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ModelField
