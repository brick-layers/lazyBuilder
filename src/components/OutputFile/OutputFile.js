import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store, history } from '../components.js'
import { createConfigFile } from 'lazysql'

const mapStateToProps = state => {
  console.log('hit state')
  return state
}

class OutputFile extends Component {
  constructor(props) {
    super(props)
    this.generateFile = this.generateFile.bind(this)
  }

  generateFile(e) {
    e.preventDefault()
    const preview = document.getElementById('jsonPreview')
    preview.value = JSON.stringify(this.props)
    console.log('-->', this.props)
    console.log('models -->', this.props.Models)
  }
  render() {
    return (
      <div>
        <div>Save Your Configuration File</div>
        <div>
          <p>Fileinfo</p>
          <button
            onClick={this.generateFile}
            className="btn btn-large btn-positive"
          >
            Generate File
          </button>
          <div className="form-group">
            <label>Description</label>
            <textarea
              id="jsonPreview"
              className="form-control"
              style={{ width: '100%' }}
              rows="50"
            />
          </div>
        </div>
      </div>
    )
  }
}

OutputFile = connect(mapStateToProps)(OutputFile)

export default OutputFile
