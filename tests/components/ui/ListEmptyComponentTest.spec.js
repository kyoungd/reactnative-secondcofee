import React from 'react'
import { shallow } from 'react-native-testing-library'
import { ListEmptyComponent } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(<ListEmptyComponent text="List is empty" />)
  expect(output).toMatchSnapshot()
})
