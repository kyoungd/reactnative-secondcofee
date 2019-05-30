import React from 'react'
import { shallow } from 'react-native-testing-library'
import { Separator } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(<Separator />)
  expect(output).toMatchSnapshot()
})
