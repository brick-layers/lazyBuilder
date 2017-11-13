import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store, history } from '../components.js'

import { createConfigFile } from 'lazysql'
import _ from 'lodash'

import Success from '../Success/Success.js'

import { remote, ipcMain, browserWindow } from 'electron'
const dialog = remote.dialog

const mapStateToProps = state => {
  console.log('hit state')
  return state
}

class OutputFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: undefined,
      saved: false,
      fileName: undefined,
      destination: undefined
    }
    this.showSave = this.showSave.bind(this)
  }

  componentDidMount() {
    this.generateFile()
  }

  showSave(e) {
    e.preventDefault()
    dialog.showSaveDialog(
      browserWindow,
      {
        title: 'save json config',
        message:
          'Choose a directory where to save your lazySql configuration file',
        buttonLabel: 'Save Config File',
        properties: ['openDirectory'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
      },
      pathOut => {
        if (pathOut) {
          console.log('=========pathOut===========', pathOut)
          let fileName = pathOut.split('/')
          fileName = fileName[fileName.length - 1]
          console.log('file name = ', fileName)
          let destination = pathOut.slice(0, -1 * fileName.length)
          console.log('destination = ', destination)
          createConfigFile(fileName, destination, this.state.output)
          this.setState({
            saved: true,
            fileName: fileName,
            destination: destination
          })
        }
      }
    )
  }

  generateFile() {
    const db = {
      URI:
        this.props.Database.type +
        '://localhost:' +
        this.props.Database.port +
        '/' +
        this.props.Database.name
    }
    console.log('db -->', db)
    const models = {}
    const associations = []

    this.props.Associations.associations.forEach(association => {
      let options = null
      if (association.options) {
        options = {
          [association.options]: association.value
        }
      }

      const newAssociation = {
        [association.sourceModel]: {
          [association.association]: {
            [association.targetModel]: options
          }
        }
      }

      associations.push(newAssociation)
    })
    console.log('ass -->', associations)

    // inserts models from state to models obj
    this.props.Models.models.forEach(model => {
      // for every model create new key and set value to reduced fileds
      models[model.name] = model.fields.reduce((accum, field) => {
        let name = field.name
        const details = {}
        _.forIn(field, (value, key) => {
          if (key !== 'name' && key !== 'id' && value !== null)
            switch (key) {
              case 'validations':
                details[key] = JSON.parse(value)
                break
              case 'type':
                details[key] = 'SEQUELIZE.' + value.toUpperCase()
                break
              default:
                if (value === 'true') {
                  details[key] = true
                } else if (value === 'false') {
                  details[key] = false
                } else {
                  details[key] = value
                }
                break
            }
        })
        accum[name] = details
        return accum
      }, {})
      const finalObject = {
        db: db,
        models: models,
        associations: associations
      }
      this.setState({ output: finalObject })
    })

    console.log('============ models', models)
  }
  render() {
    if (this.state.saved)
      return (
        <Success
          message={`Your JSON configuration file has been successfully saved as: ${
            this.state.fileName
          } inside of: ${this.state.destination}`}
        />
      )
    return (
      <div>
        <h2>Your Configuration File</h2>
        <hr />
        <div>
          <button
            onClick={this.showSave}
            className="btn btn-large btn-positive"
          >
            Save File As
          </button>
        </div>
        <hr />
        <div>
          <div className="form-group">
            <label>File Preview</label>
            <textarea
              id="jsonPreview"
              className="form-control"
              value={JSON.stringify(this.state.output, null, '    ')}
              style={{ width: '100%', height: '100%' }}
              rows="20"
            />
          </div>
        </div>
      </div>
    )
  }
}

OutputFile = connect(mapStateToProps)(OutputFile)

export default OutputFile
