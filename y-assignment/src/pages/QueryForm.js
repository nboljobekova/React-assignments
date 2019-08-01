import React from 'react';
import { Formik, Form, Field } from 'formik'


function validateQuery(value) {
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

const QueryForm = () => (
    <Formik
        initialValues={{ query: '' }}
        onSubmit={values => {
          console.log(values);
        }}
    >

    {({ errors, touched }) => (
      <Form className="intro__form">
        <Field name="query" className='form-input' validate={validateQuery} placeholder="Set number of listings"/>
        <button type="submit" className="form-button">
        Submit
        </button>
        {errors.query && touched.query && <div className="form-error">{errors.query}</div>}
      </Form>
    )}
  </Formik>
)

export default QueryForm;