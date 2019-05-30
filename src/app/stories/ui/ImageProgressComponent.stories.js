import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ImageProgressComponent } from 'components/ui'
import { CenterView } from '../decorators'

storiesOf('ImageProgressComponent', module)
  .addDecorator(story => (
    <CenterView horizontalAlignment="center">{story()}</CenterView>
  ))
  .add('default', () => (
    <ImageProgressComponent
      photoURL="https://imgur.com/5WzWMpx.png"
      resizeMode="cover"
      style={{ width: 80, height: 80 }}
      imageStyle={{ borderRadius: 40 }}
    />
  ))
