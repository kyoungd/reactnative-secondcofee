import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { ActionButton } from 'components/ui'
import { CenterView } from '../decorators'

export const actions = {
  onPress: action('onPress')
}

storiesOf('ActionButton', module)
  .addDecorator(story => (
    <CenterView horizontalAlignment="center">{story()}</CenterView>
  ))
  .add('default', () => <ActionButton text="ACTION" {...actions} />)
