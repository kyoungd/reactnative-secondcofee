import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin: 0px 12px 12px 0px;
  border-radius: 8;
  border-width: 1;
  border-color: ${props => (props.active === true ? '#000' : '#dee3ea')};
  background-color: ${props => (props.active === true ? '#000' : '#fff')};
`

const Label = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: ${props => (props.active === true ? '#fff' : '#000')};
  text-transform: uppercase;
`

export default function FilterOptionListItem({ active, label, onPress }) {
  return (
    <Wrapper active={active} onPress={() => onPress()}>
      <Label active={active}>{label}</Label>
    </Wrapper>
  )
}

FilterOptionListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}
