import React from 'react'
import PropTypes from 'prop-types'
import { Item, Input } from 'native-base'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  margin: ${props => (props.regular === true ? '0px' : '8px 0px')};
`

const FormFieldWrapper = styled(Item)`
  border-color: #dce1e7;
  background-color: ${props =>
    props.regular === true ? '#f4f6f9' : 'transparent'};
  padding: ${props => (props.regular === true ? '0px 8px' : '0px')};
  margin: 0px;
`

const TextBox = styled(Input)`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: ${props => (props.disabled === true ? '#a5a5a5' : '#000')};
`

const Error = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #fc1c1c;
  margin: 2px 2px;
`

export default function FormField({
  label,
  value,
  error,
  secure,
  disabled,
  regular,
  keyboardType,
  returnKeyType,
  onChangeText,
  onSubmitEditing
}) {
  return (
    <Wrapper regular={regular}>
      <FormFieldWrapper regular={regular}>
        <TextBox
          disabled={disabled}
          placeholder={label}
          placeholderTextColor="#a5a5a5"
          value={value}
          secureTextEntry={secure}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChangeText={text => onChangeText(text)}
          onSubmitEditing={() => onSubmitEditing()}
        />
      </FormFieldWrapper>

      {!!error && <Error>{error}</Error>}
    </Wrapper>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  secure: PropTypes.bool,
  disabled: PropTypes.bool,
  regular: PropTypes.bool,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func
}
FormField.defaultProps = {
  secure: false,
  disabled: false,
  regular: false,
  keyboardType: 'default',
  returnKeyType: 'next',
  error: '',
  onSubmitEditing: () => null
}
