import React from 'react'
import { shallow } from 'react-native-testing-library'
import { SectionHeader } from 'components/headers'

test('Component renders correctly', () => {
  const { output } = shallow(<SectionHeader>Heading</SectionHeader>)
  expect(output).toMatchSnapshot()
})
