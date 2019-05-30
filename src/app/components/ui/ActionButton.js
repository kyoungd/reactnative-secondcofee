import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const ButtonWrapper = styled.TouchableOpacity`
  height: 30;
  width: 80;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4;
  background-color: #346df1;
`

const ButtonText = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: 'SourceSansProRegular';
  font-size: 13;
  color: #fff;
  text-transform: uppercase;
`

export default function ActionButton({ text, onPress }) {
  return (
    <ButtonWrapper onPress={() => onPress()}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  )
}

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}
