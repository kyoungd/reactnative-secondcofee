import React from 'react'
import { shallow } from 'react-native-testing-library'
import { SignUpForm } from 'components/forms'

test('Component renders correctly', () => {
  const { output } = shallow(
    <SignUpForm loading={false} onSubmit={values => values} />
  )
  expect(output).toMatchSnapshot()
})
