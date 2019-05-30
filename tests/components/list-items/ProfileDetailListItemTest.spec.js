import React from 'react'
import { shallow } from 'react-native-testing-library'
import { ProfileDetailListItem } from 'components/list-items'

test('Component renders correctly', () => {
  const { output } = shallow(
    <ProfileDetailListItem
      iconName="ios-locate"
      title="Shipping Address"
      content="717 Leatherwood Road Hoffman Estates, IL 60169"
    />
  )
  expect(output).toMatchSnapshot()
})
