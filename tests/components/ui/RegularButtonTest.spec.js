import React from 'react'
import { shallow } from 'react-native-testing-library'
import { RegularButton } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(
    <RegularButton text="Button" onPress={() => null} />
  )
  expect(output).toMatchSnapshot()
})
