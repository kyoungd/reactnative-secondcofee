import React from 'react'
import { shallow } from 'react-native-testing-library'
import { ImageProgressComponent } from 'components/ui'

test('Component renders correctly', () => {
  const { output } = shallow(
    <ImageProgressComponent
      photoURL="https://imgur.com/5WzWMpx.png"
      resizeMode="cover"
      style={{ width: 80, height: 80 }}
      imageStyle={{ borderRadius: 40 }}
    />
  )
  expect(output).toMatchSnapshot()
})
