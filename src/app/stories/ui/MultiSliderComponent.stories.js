import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { MultiSliderComponent } from 'components/ui'
import { CenterView } from '../decorators'

const actions = {
  onSliderValuesChange: action('onSliderValuesChange')
}

storiesOf('MultiSliderComponent', module)
  .addDecorator(story => (
    <CenterView horizontalAlignment="center">{story()}</CenterView>
  ))
  .add('default', () => (
    <MultiSliderComponent range={[1000, 9000]} {...actions} />
  ))
