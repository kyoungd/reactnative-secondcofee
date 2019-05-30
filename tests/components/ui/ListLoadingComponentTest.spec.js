import React from 'react'
import { shallow } from 'react-native-testing-library'
import { ListLoadingComponent } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(<ListLoadingComponent text="List is loading" />)
  expect(output).toMatchSnapshot()
})
