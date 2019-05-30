import React from 'react'
import { shallow } from 'react-native-testing-library'
import { SettingsListItem } from 'components/list-items'

test('Component renders correctly', () => {
  const { output } = shallow(
    <SettingsListItem
      iconName="ios-settings"
      text="Settings"
      onPress={() => null}
      onSwitchValueChange={value => value}
    />
  )
  expect(output).toMatchSnapshot()
})
