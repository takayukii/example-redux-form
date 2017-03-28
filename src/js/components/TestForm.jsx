import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, getFormValues} from 'redux-form';

import TestActions from '../actions/TestActions';
import {TestForms} from '../constants/FormTypes';
import './App.scss';

export class TestForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {pristine, invalid, submitting, handleSubmit} = this.props;
    return (
      <form className="form" onSubmit={handleSubmit}>
          <Field
            component={compnentA}
            name="a"
            type="text"
          />
          <button className="btn btn-primary" disabled={pristine || invalid || submitting}>
            Submit
          </button>
      </form>
    );
  }
}

TestForm.propTypes = {
  change: PropTypes.any,
  handleSubmit: PropTypes.any,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

export const TestFormReduxForm = reduxForm({
  form: TestForms.APP,
  validate: validateForm,
})(TestForm);

export default connect((state) => ({
  test: state.test,
}))(TestFormReduxForm);

function compnentA(field) {
  const {input, meta} = field;
  return (
    <div className={`form-group ${meta.touched && meta.error ? 'has-error' : ''}`}>
      <label className="control-label" htmlFor="input1">A</label>
      <input id="input1" type="text" className="form-control" {...input} />
      {meta.touched && meta.error && <span className="help-block">{meta.error}</span>}
    </div>
  );
}

function validateForm(values) {
  const errors = {};
  if(! values.a) {
    errors.a = 'Required';
  }
  return errors;
}
