import React from 'react'
import { shallow } from 'react-native-testing-library'
import { MultiSliderComponent } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(
    <MultiSliderComponent
      range={[1000, 9000]}
      onSliderValuesChange={values => values}
    />
  )
  expect(output).toMatchSnapshot()
})
