import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const HelpText = styled.Text`
  width: 250;
  font-family: 'SourceSansProLight';
  font-size: 20;
  text-align: center;
  color: #242635;
`

export default function ListEmptyComponent({ text }) {
  return (
    <Wrapper>
      <HelpText>{text}</HelpText>
    </Wrapper>
  )
}

ListEmptyComponent.propTypes = {
  text: PropTypes.string.isRequired
}
