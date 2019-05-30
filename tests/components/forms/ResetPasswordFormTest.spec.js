import React from 'react'
import { shallow } from 'react-native-testing-library'
import { ResetPasswordForm } from 'components/forms'

test('Component renders correctly', () => {
  const { output } = shallow(
    <ResetPasswordForm loading={false} onSubmit={values => values} />
  )
  expect(output).toMatchSnapshot()
})
