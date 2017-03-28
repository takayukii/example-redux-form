import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TestActions from '../actions/TestActions';
import './App.scss';

import TestForm from './TestForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <TestForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit(values) {
    console.log('onSubmit', values);
    this.props.testActions.testSuccess(values);
  }
}

App.propTypes = {
  test: PropTypes.object,
  testActions: PropTypes.object,
};

export default connect(state => ({
  test: state.test,
}), dispatch => ({
  testActions: bindActionCreators(TestActions, dispatch),
}))(App);
