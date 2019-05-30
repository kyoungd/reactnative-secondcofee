import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.8);
`

export default function ImageOverlayComponent({ children }) {
  return <Overlay>{children}</Overlay>
}

ImageOverlayComponent.propTypes = {
  children: PropTypes.node.isRequired
}
