import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from './component.js';

const mapStateToProps = (state) => { return {
  ...state.Associations
} }
const mapDispatchToProps = (dispatch) => { return {
  dummyAction: () => {
    dispatch( actions.dummyAction() );
  }
} }
class Associations extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div>Associations -- Stateful w/ Redux</div>
    );
  }
}

Associations = connect(mapStateToProps, mapDispatchToProps)(Associations);

export default Associations;
