import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Separator } from 'components/ui'
import { CenterView } from '../decorators'

storiesOf('Separator', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <Separator />)
