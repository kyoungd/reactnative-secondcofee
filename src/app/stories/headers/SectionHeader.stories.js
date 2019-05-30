import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SectionHeader } from 'components/headers'
import { CenterView } from '../decorators'

storiesOf('SectionHeader', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <SectionHeader>HEADING</SectionHeader>)
