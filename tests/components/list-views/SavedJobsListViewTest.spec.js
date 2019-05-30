import React from 'react'
import { shallow } from 'react-native-testing-library'
import { SavedJobsListView } from 'components/list-views'
import { SAMPLE_JOB_LISTINGS } from 'data/sampleData'

test('Component renders correctly', () => {
  const { output } = shallow(
    <SavedJobsListView
      loading={false}
      items={SAMPLE_JOB_LISTINGS}
      onItemPress={item => item}
      onItemRemovePress={item => item}
    />
  )
  expect(output).toMatchSnapshot()
})
