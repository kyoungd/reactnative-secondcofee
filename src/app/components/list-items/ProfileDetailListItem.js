import React from 'react'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex-direction: row;
  padding: 16px;
`

const IconWrapper = styled.View`
  justify-content: center;
`

const Right = styled.View`
  flex: 1;
  margin-left: 16;
`

const Title = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 13;
  color: #346df1;
`

const Label = styled.Text.attrs({
  numberOfLines: 2
})`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #000;
  margin-top: 4;
`

export default function ProfileDetailListItem({ iconName, title, content }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Ionicons size={25} color="#a5a5a5" name={iconName} />
      </IconWrapper>

      <Right>
        <Title>{title}</Title>
        <Label>{content}</Label>
      </Right>
    </Wrapper>
  )
}

ProfileDetailListItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
