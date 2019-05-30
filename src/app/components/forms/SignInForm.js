import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { FormField, RegularButton, CustomActivityIndicator } from '../ui'

const Wrapper = styled.View`
  padding: 16px;
`

const LogoWrapper = styled.View`
  height: 80;
  justify-content: center;
  align-items: center;
`

const Logo = styled.Image.attrs({
  resizeMode: 'contain',
  source: require('assets/images/logo.png')
})`
  width: 60;
  height: 60;
`

const ResetPasswordText = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  text-align: center;
`

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('email address is required')
    .email('enter a valid email address'),
  password: yup.string().required('password is required')
})

export default function SignInForm({
  loading,
  onSubmit,
  onResetPasswordPress
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => onSubmit(values)}
      render={props => (
        <KeyboardAwareScrollView enableOnAndroid>
          <Wrapper>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>

            <FormField
              label="Email"
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

            <RegularButton
              text="SIGN IN"
              onPress={() => props.handleSubmit()}
            />

            <ResetPasswordText onPress={() => onResetPasswordPress()}>
              Forgot password?
            </ResetPasswordText>

            {loading && <CustomActivityIndicator />}
          </Wrapper>
        </KeyboardAwareScrollView>
      )}
    />
  )
}

SignInForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onResetPasswordPress: PropTypes.func.isRequired
}
