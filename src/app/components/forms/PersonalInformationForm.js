import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as yup from 'yup'
import { FormField } from '../ui'
import FormContainer from './FormContainer'

export const initialValues = {
  fullName: 'John Appleseed',
  email: 'john@appleseed.com'
}

export const validationSchema = yup.object().shape({
  fullName: yup.string().required('full name is required'),
  email: yup
    .string()
    .required('email address is required')
    .email('enter a valid email address')
})

export default function PersonalInformationForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => onSubmit(values)}
      render={props => (
        <FormContainer
          headingTitle="Personal Information"
          headingDescription="Tell us a little about you"
          submitButtonText="NEXT"
          onSubmitButtonPress={() => props.handleSubmit()}
          loading={false}
        >
          <FormField
            label="Full Name"
            value={props.values.fullName}
            onChangeText={text => props.setFieldValue('fullName', text)}
            error={props.touched.fullName && props.errors.fullName}
          />

          <FormField
            disabled
            label="Email Address"
            keyboardType="email-address"
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)}
            error={props.touched.email && props.errors.email}
          />
        </FormContainer>
      )}
    />
  )
}

PersonalInformationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
