import React from 'react'
import { shallow } from 'react-native-testing-library'
import { ProfessionalExperienceForm } from 'components/forms'

test('Component renders correctly', () => {
  const { output } = shallow(
    <ProfessionalExperienceForm onSubmit={values => values} />
  )
  expect(output).toMatchSnapshot()
})
