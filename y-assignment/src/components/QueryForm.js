import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

import { connect } from "react-redux";
import { getCards } from '../actions/CardsActions';

class QueryForm extends Component {

  validateQuery = value => {
    let error;
    // if (!value) {
    //   error = 'Required';
    // } else if (!/^[0-9]$/i.test(value)) {
    //   error = 'Invalid number of listing. Please enter number 1-10';
    // }
    if (!/^[0-9]$/i.test(value)) {
      error = 'Invalid number of listing. Please enter number 1-10';
    }
    return error;
  }

  updateQuery = (values) => {
    // console.log(values.num)
    this.props.onGetCards(values.num)    
  }

  render() {
    return (
      
      <Formik
          initialValues={{ num: '' }}
          onSubmit={values => {
            // this.updateQuery(values);
            console.log(values);
          }}
      >     

        {({ errors, touched }) => (
          <Form className="intro__form">
            <Field name="num" className='form-input' validate={this.validateQuery} placeholder="Set number of listings"/>
            <button type="submit" className="form-button">
            Submit
            </button>
            {errors.num && touched.num && <div className="form-error">{errors.num}</div>}
          </Form>
        )}
      </Formik>
    )
  }

}

  const mapDispatchToProps = dispatch => ({
    onGetCards: (data) => dispatch(getCards(data))
  })

export default connect(
    mapDispatchToProps
)(QueryForm);
