import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { api } from 'lazysql'
const lazySQL = require('lazysql').api
const lazyExpress = require('lazyexpress').api

import Success from '../Success/Success.js'

import { actions } from './component.js'
import styles from './component.less'
import logoimg from '../../assets/lazybuilder.png'
import dropImg from '../../assets/drop.png'

import { remote, ipcMain, browserWindow } from 'electron'
const dialog = remote.dialog

const mapStateToProps = state => {
  return {
    ...state.Drag
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dragInSetInputFile: source => {
      dispatch(actions.setInputFile(source))
    },
    dragInSetOutputPath: source => {
      dispatch(actions.setOutputPath(source))
    },
    setComplete: () => {
      dispatch(actions.completeLay({ complete: true }))
    }
  }
}
class Drag extends Component {
  constructor(props) {
    super(props)
  }

  showPathSelect() {}

  render() {
    document.ondragover = document.ondrop = ev => {
      ev.preventDefault()
    }

    document.body.ondrop = ev => {
      ev.preventDefault()
      this.props.dragInSetInputFile({
        inputFile: ev.dataTransfer.files[0].path
      })
    }
    console.log(this.props.inputFile)
    if (this.props.complete)
      return (
        <Success message="DB folder with all your models files has been created" />
      )
    return (
      <div>
        <div className={`${styles.center} ${styles.fill}`}>
          <img
            width="60%"
            className={styles.logo}
            src={logoimg}
            alt="lazyBuilder Logo"
          />
          <div className={`${styles.logoText}`}>lazyBuilder</div>
        </div>
        {!this.props.inputFile &&
          !this.props.complete && (
            <div className={`${styles.center} ${styles.fill}`}>
              <h3 className={styles.dragText}>Drop a JSON file here</h3>
              <img src={dropImg} className={styles.dropImg} />
              <h1 />
            </div>
          )}
        {this.props.inputFile &&
          !this.props.complete &&
          !this.props.outputPath && (
            <div className={`${styles.center} `}>
              <h3 className={styles.dragText}>input file</h3>
              <p>{this.props.inputFile}</p>
              <h1 className={styles.dragOutputText}>
                Where should we output your db folder?
              </h1>
              <button
                onClick={() =>
                  dialog.showOpenDialog(
                    browserWindow,
                    {
                      properties: ['openDirectory']
                    },
                    path => {
                      this.props.dragInSetOutputPath({ outputPath: path[0] })
                    }
                  )
                }
              >
                Select Directory
              </button>
            </div>
          )}
        {this.props.inputFile &&
          !this.props.complete &&
          this.props.outputPath && (
            <div className={`${styles.center} ${styles.fill}`}>
              <h3 className={styles.dragText}>input file</h3>
              <p>{this.props.inputFile}</p>
              <h3 className={styles.dragText}>output path</h3>
              <p>{this.props.outputPath}</p>
              <button
                onClick={() => {
                  lazySQL(this.props.inputFile, this.props.outputPath)
                  lazyExpress(this.props.inputFile, this.props.outputPath)
                  this.props.setComplete()
                }}
              >
                Make Some Magic
              </button>
            </div>
          )}
      </div>
    )
  }
}

Drag = connect(mapStateToProps, mapDispatchToProps)(Drag)

export default Drag
