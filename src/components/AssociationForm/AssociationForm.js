import React, { Component } from 'react'

import { history } from '../components.js'
import { actions } from '../Associations/component.js'
import { connect } from 'react-redux'

import { TextInput, SelectBox, resetUID } from '../inputs.js'

const mapStateToProps = state => {
  console.log('STATE:', state)
  return {
    models: state.Models.models
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveAssociation: association => {
      dispatch(actions.addAssociation(association))
    }
  }
}

class AssociationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sourceModel: undefined,
      association: undefined,
      targetModel: undefined,
      options: undefined,
      optionsValue: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value, name) {
    if (value === 'undefined') value = undefined
    console.log('!!!', value, '!', name)
    this.setState({ [name]: value })
  }
  render() {
    if (!this.props.models.length)
      return (
        <div>before you can create an association, a model is required</div>
      )
    return (
      <div>
        <h1>Add Association</h1>
        <div className="box">
          <div className="padded">
            <form
              onSubmit={e => {
                e.preventDefault()
                console.log(e.target)
                console.log(e.target.sourceModel.value)
                console.log(e.target.association.value)
                console.log(e.target.targetModel.value)
                let optionsValue, options
                if (e.target.options.value !== 'undefined') {
                  options = e.target.options.value
                  optionsValue = e.target.optionsValue.value
                } else {
                  options = undefined
                  optionsValue = undefined
                }
                this.setState({
                  sourceModel: e.target.sourceModel.value,
                  association: e.target.association.value,
                  targetModel: e.target.targetModel.value,
                  options: options,
                  optionsValue: optionsValue
                })
                this.props.saveAssociation({
                  sourceModel: e.target.sourceModel.value,
                  association: e.target.association.value,
                  targetModel: e.target.targetModel.value,
                  options: options,
                  optionsValue: optionsValue
                })
                history.push('/associations')
              }}
            >
              <SelectBox
                label="Source Model"
                name="sourceModel"
                onChange={this.handleChange}
                options={this.props.models.map(model => {
                  return { value: model.name, label: model.name }
                })}
              />
              <SelectBox
                label="Association"
                name="association"
                onChange={this.handleChange}
                options={[
                  {
                    value: 'belongsTo',
                    label: 'belongsTo (1:1 | FK in source model)'
                  },
                  {
                    value: 'hasOne',
                    label: 'hasOne (1:1 | FK in target model)'
                  },
                  {
                    value: 'belongsToMany',
                    label:
                      'belongsToMany (1:M | join table | needs a through table)'
                  },
                  {
                    value: 'hasMany',
                    label: 'hasMany (1:M | FK in target model)'
                  }
                ]}
              />
              <SelectBox
                label="Target Model"
                onChange={this.handleChange}
                name="targetModel"
                options={this.props.models.map(model => {
                  return { value: model.name, label: model.name }
                })}
              />
              <SelectBox
                label="Option"
                onChange={this.handleChange}
                name="options"
                value={this.state.options}
                options={[
                  { value: 'undefined', label: 'none' },
                  { value: 'as', label: 'as' },
                  { value: 'through', label: 'through' },
                  { value: 'foreignKey', label: 'foreignKey' }
                ]}
              />
              {this.state.options !== undefined && (
                <TextInput
                  onChange={this.handleChange}
                  label="Option Value"
                  name="optionsValue"
                  value={this.state.optionsValue}
                  placeholder="..."
                />
              )}
              <div className="padded" style={{ paddingBottom: '20px' }}>
                <button type="submit" className="btn btn-primary pull-right">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

AssociationForm = connect(mapStateToProps, mapDispatchToProps)(AssociationForm)

export default AssociationForm
