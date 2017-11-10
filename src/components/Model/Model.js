import React, { Component } from 'react'

class Model extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.match.params.name)
    return <div>Model: {this.props.match.params.name}</div>
  }
}

export default Model
