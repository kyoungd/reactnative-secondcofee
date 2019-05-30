import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as yup from 'yup'
import { FormField } from '../ui'
import FormContainer from './FormContainer'

export const initialValues = {
  fullName: '',
  email: '',
  password: ''
}

export const validationSchema = yup.object().shape({
  fullName: yup.string().required('full name is required'),
  email: yup
    .string()
    .required('email address is required')
    .email('enter a valid email address'),
  password: yup.string().required('password is required')
})

export default function SignUpForm({ loading, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => onSubmit(values)}
      render={props => (
        <FormContainer
          headingTitle="Welcome"
          headingDescription="Complete the form to create an account"
          submitButtonText="CREATE ACCOUNT"
          onSubmitButtonPress={() => props.handleSubmit()}
          loading={loading}
        >
          <FormField
            label="Full Name"
            value={props.values.fullName}
            onChangeText={text => props.setFieldValue('fullName', text)}
            error={props.touched.fullName && props.errors.fullName}
          />

          <FormField
            label="Email Address"
            keyboardType="email-address"
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)}
            error={props.touched.email && props.errors.email}
          />

          <FormField
            label="Password"
            secure
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
            error={props.touched.password && props.errors.password}
          />
        </FormContainer>
      )}
    />
  )
}

SignUpForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}
