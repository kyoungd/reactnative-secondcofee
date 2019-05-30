import React from 'react'
import { shallow } from 'react-native-testing-library'
import { FormHeading } from 'components/forms'

test('Component renders correctly', () => {
  const { output } = shallow(
    <FormHeading
      title="A form heading"
      description="Some text that supports the heading"
    />
  )
  expect(output).toMatchSnapshot()
})
