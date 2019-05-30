import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Wrapper = styled.Text`
  padding: 16px;
  font-family: 'SourceSansProBold';
  font-size: 13;
  color: #000;
  text-transform: uppercase;
  background-color: #f4f6fa;
`

export default function SectionHeader({ children }) {
  return <Wrapper>{children}</Wrapper>
}

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired
}
