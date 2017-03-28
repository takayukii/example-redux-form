import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, getFormValues} from 'redux-form';

import {TestFormTypes} from '../constants/FormTypes';
const {APP: FORM} = TestFormTypes;
import './App.scss';

const initialValues = {
  __isOpen: false,
};

export class TestForm extends Component {
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  render() {
    const {pristine, invalid, submitting, handleSubmit, formValues} = this.props;
    return (
      <div>
        <button onClick={this.onClickButton}>{formValues.__isOpen ? 'close' : 'open'}</button>
        <div className={`${formValues.__isOpen ? '' : 'hidden'}`}>
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

        </div>
      </div>
    );
  }

  onClickButton(e) {
    const {change, formValues} = this.props;
    change('__isOpen', !formValues.__isOpen);

    // it can keep object too.
    change('__values', {
      ...formValues
    });
  }
}

TestForm.propTypes = {
  formValues: PropTypes.object,
  change: PropTypes.any,
  handleSubmit: PropTypes.any,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

export const TestFormReduxForm = reduxForm({
  form: FORM,
  validate: validateForm,
})(TestForm);

export default connect((state) => ({
  test: state.test,
  initialValues,
  formValues: getFormValues(FORM)(state) || initialValues,
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
