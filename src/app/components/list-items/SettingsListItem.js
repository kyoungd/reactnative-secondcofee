import React from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  height: 60;
  padding: 16px;
`

const LabelWrapper = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0px 8px;
`

const Label = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #242635;
  margin: 0px 0px 4px;
`

const IconWrapper = styled.View`
  width: 30;
  align-items: ${props =>
    props.positionValue === 'left' ? 'flex-start' : 'flex-end'};
`

export default function SettingsListItem({
  iconName,
  text,
  withSwitch,
  isActive,
  onPress,
  onSwitchValueChange
}) {
  return (
    <Wrapper onPress={() => !withSwitch && onPress()}>
      <IconWrapper positionValue="left">
        <Ionicons name={iconName} color="#346df1" size={25} />
      </IconWrapper>

      <LabelWrapper>
        <Label>{text}</Label>
      </LabelWrapper>

      {!withSwitch && (
        <IconWrapper>
          <Ionicons name="ios-arrow-forward" color="#000" size={20} />
        </IconWrapper>
      )}
      {withSwitch && (
        <Switch
          value={isActive}
          onValueChange={value => onSwitchValueChange(value)}
        />
      )}
    </Wrapper>
  )
}

SettingsListItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  withSwitch: PropTypes.bool,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  onSwitchValueChange: PropTypes.func
}
SettingsListItem.defaultProps = {
  withSwitch: false,
  isActive: false,
  onPress: () => null,
  onSwitchValueChange: () => null
}
