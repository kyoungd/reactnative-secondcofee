import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ListLoadingComponent } from 'components/ui'

storiesOf('ListLoadingComponent', module).add('default', () => (
  <ListLoadingComponent text="Loading..." />
))
