import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { RegularButton } from 'components/ui'
import { CenterView } from '../decorators'
import { actions } from './ActionButton.stories'

storiesOf('RegularButton', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <RegularButton text="MY BUTTON" {...actions} />)
