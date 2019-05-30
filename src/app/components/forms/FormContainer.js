import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'
import { RegularButton, CustomActivityIndicator } from '../ui'
import FormHeading from './FormHeading'

const Wrapper = styled.View`
  padding: 16px;
`

export default function FormContainer({
  headingTitle,
  headingDescription,
  submitButtonText,
  onSubmitButtonPress,
  loading,
  children
}) {
  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Wrapper>
        <FormHeading title={headingTitle} description={headingDescription} />

        {children}

        {!loading && (
          <RegularButton
            text={submitButtonText}
            onPress={() => onSubmitButtonPress()}
          />
        )}
        {loading && <CustomActivityIndicator />}
      </Wrapper>
    </KeyboardAwareScrollView>
  )
}

FormContainer.propTypes = {
  headingTitle: PropTypes.string,
  headingDescription: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  onSubmitButtonPress: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}
FormContainer.defaultProps = {
  headingTitle: ''
}
