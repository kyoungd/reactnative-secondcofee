import React from 'react'
import { shallow } from 'react-native-testing-library'
import { PersonalInformationForm } from 'components/forms'

test('Component renders correctly', () => {
  const { output } = shallow(
    <PersonalInformationForm onSubmit={values => values} />
  )
  expect(output).toMatchSnapshot()
})
