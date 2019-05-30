import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as yup from 'yup'
import { FormField } from '../ui'
import FormContainer from './FormContainer'

const initialValues = {
  qualification: '',
  field: '',
  experience: ''
}

const validationSchema = yup.object().shape({
  qualification: yup.string().required('qualification is required'),
  field: yup.string().required('field is required'),
  experience: yup.string().required('years of experience is required')
})

export default function ProfessionalExperienceForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => onSubmit(values)}
      render={props => (
        <FormContainer
          headingTitle="Professional Experience"
          headingDescription="Provide some details about your career"
          submitButtonText="NEXT"
          onSubmitButtonPress={() => props.handleSubmit()}
          loading={false}
        >
          <FormField
            label="Qualification"
            value={props.values.qualification}
            onChangeText={text => props.setFieldValue('qualification', text)}
            error={props.touched.qualification && props.errors.qualification}
          />

          <FormField
            label="Field/Category"
            value={props.values.field}
            onChangeText={text => props.setFieldValue('field', text)}
            error={props.touched.field && props.errors.field}
          />

          <FormField
            keyboardType="number-pad"
            label="Years of Experience"
            value={props.values.experience}
            onChangeText={text => props.setFieldValue('experience', text)}
            error={props.touched.experience && props.errors.experience}
          />
        </FormContainer>
      )}
    />
  )
}

ProfessionalExperienceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
