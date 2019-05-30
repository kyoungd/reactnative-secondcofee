import React from 'react'
import { shallow } from 'react-native-testing-library'
import { FilterOptionListItem } from 'components/list-items'

test('Component renders correctly', () => {
  const { output } = shallow(
    <FilterOptionListItem active label="Filter" onPress={() => null} />
  )
  expect(output).toMatchSnapshot()
})
