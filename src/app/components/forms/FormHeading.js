import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Title = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 20;
`

const Description = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  margin-top: 4;
`

export default function FormHeading({ title, description }) {
  return (
    <>
      {!!title && <Title numberOfLines={1}>{title}</Title>}
      <Description numberOfLines={2}>{description}</Description>
    </>
  )
}

FormHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
