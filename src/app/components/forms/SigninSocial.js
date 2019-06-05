import React from 'react'
import PropTypes from 'prop-types'
import View from 'react-native'
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

export default function SignInSocial({
  loading,
  onSubmit,
  onResetPasswordPress
}) {
  return (
   <View>
    <Wrapper>

      <RegularButton
        text="Facebook"
        onPress={() => props.handleFacebook()}
      />

      <RegularButton
        text="Google"
        onPress={() => props.handleGoogle()}
      />

      <RegularButton
        text="Twitter"
        onPress={() => props.handleTwitter()}
      />

    </Wrapper>
  </View>
  )
}

SignInSocial.propTypes = {
  handleFacebook: PropTypes.func.isRequired,
  handleGoogle: PropTypes.func.isRequired,
  handleTwitter: PropTypes.func.isRequired
}