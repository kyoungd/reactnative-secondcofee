import React from 'react'
import { shallow } from 'react-native-testing-library'
import { FilterOptionsListView } from 'components/list-views'
import { SAMPLE_FILTER_OPTIONS } from 'data/sampleData'

test('Component renders correctly', () => {
  const { output } = shallow(
    <FilterOptionsListView
      items={SAMPLE_FILTER_OPTIONS[0].options}
      activeItems={['Tech', 'Remote']}
      onItemPress={item => item}
    />
  )
  expect(output).toMatchSnapshot()
})
