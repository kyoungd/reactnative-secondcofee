import React from 'react'
import { shallow } from 'react-native-testing-library'
import { SavedJobListItem } from 'components/list-items'

test('Component renders correctly', () => {
  const { output } = shallow(
    <SavedJobListItem
      photoURL="https://imgur.com/5WzWMpx.png"
      title="UI/UX Developer"
      companyName="Universal Studios"
      postedAt="13 Mar 2019"
      experience="2-3 years"
      onPress={() => null}
      onRemovePress={() => null}
    />
  )
  expect(output).toMatchSnapshot()
})
