import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { SettingsListItem } from 'components/list-items'
import { CenterView } from '../decorators'

const actions = {
  onPress: action('onPress'),
  onSwitchValueChange: action('onSwitchValueChange')
}

storiesOf('SettingsListItem', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <SettingsListItem iconName="ios-settings" text="Settings" {...actions} />
  ))
  .add('withActiveSwitch', () => (
    <SettingsListItem
      withSwitch
      isActive
      iconName="ios-settings"
      text="Settings"
      {...actions}
    />
  ))
  .add('withDeadSwitch', () => (
    <SettingsListItem
      iconName="ios-settings"
      withSwitch
      text="Settings"
      {...actions}
    />
  ))
