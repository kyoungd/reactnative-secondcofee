import React from 'react'
import { shallow } from 'react-native-testing-library'
import { FormField } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(
    <FormField
      label="Form Input"
      value="Form Input Value"
      onChangeText={text => text}
    />
  )
  expect(output).toMatchSnapshot()
})
