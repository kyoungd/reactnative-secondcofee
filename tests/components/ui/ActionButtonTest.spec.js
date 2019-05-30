import React from 'react'
import { shallow } from 'react-native-testing-library'
import { ActionButton } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(
    <ActionButton text="Button" onPress={() => null} />
  )
  expect(output).toMatchSnapshot()
})
