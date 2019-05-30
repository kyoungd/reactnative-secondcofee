import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  justify-content: ${props => props.verticalAlignment || 'auto'};
  align-items: ${props => props.horizontalAlignment || 'stretch'};
  padding: 16px;
`

export default function CenterView({
  children,
  verticalAlignment,
  horizontalAlignment
}) {
  return (
    <Wrapper
      verticalAlignment={verticalAlignment}
      horizontalAlignment={horizontalAlignment}
    >
      {children}
    </Wrapper>
  )
}

CenterView.propTypes = {
  children: PropTypes.node.isRequired,
  verticalAlignment: PropTypes.string,
  horizontalAlignment: PropTypes.string
}
CenterView.defaultProps = {
  verticalAlignment: 'center'
}
