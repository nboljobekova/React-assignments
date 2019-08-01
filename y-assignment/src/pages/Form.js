import React from 'react';
import { Formik } from 'formik'


const QueryForm = () => (
    <Formik
        initialValues={{ query: '' }}
        validate = {values => {
            let errors = {};
          
            if (!values.query) {
              errors.query = 'Required';
            } else if (!/^[0-9]$/i.test(values.query)) {
              errors.query = 'Invalid number of listing';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 200);
        }}
    >
    {props => {
    const {
        handleSubmit,
        values,
        handleBlur,
        handleChange,
        errors, 
        touched, 
        isValidating
    } = props;

    return (
      <form className="intro__form" onSubmit={handleSubmit}>
          <input
          id="query"
          placeholder="Set number of listings"
          type="number"
          value={values.query}
          onChange={handleChange}
          onBlur={handleBlur}
          className='form-input'
          // validate={validate}
          />
          {errors.query && touched.query && <div>{errors.query}</div>}
          <button
          type="submit"
          className="form-button"
          >
          Submit
          </button>
      </form>
      );
    }}
    </Formik>
)

export default QueryForm;