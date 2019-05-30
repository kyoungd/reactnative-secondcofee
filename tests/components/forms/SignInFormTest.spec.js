import React from 'react'
import { shallow } from 'react-native-testing-library'
import { SignInForm } from 'components/forms'

test('Component renders correctly', () => {
  const { output } = shallow(
    <SignInForm
      loading={false}
      onSubmit={values => values}
      onResetPasswordPress={() => null}
    />
  )
  expect(output).toMatchSnapshot()
})
