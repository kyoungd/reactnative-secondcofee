import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as yup from 'yup'
import { FormField } from '../ui'
import FormContainer from './FormContainer'

export const initialValues = {
  email: ''
}

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('email address is required')
    .email('enter a valid email address')
})

export default function ResetPasswordForm({ loading, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => onSubmit(values)}
      render={props => (
        <FormContainer
          headingDescription="Enter your email address and we'll help reset your password"
          submitButtonText="CONTINUE"
          onSubmitButtonPress={() => props.handleSubmit()}
          loading={loading}
        >
          <FormField
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

ResetPasswordForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}
