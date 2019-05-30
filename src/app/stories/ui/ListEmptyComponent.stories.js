import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ListEmptyComponent } from 'components/ui'

storiesOf('ListEmptyComponent', module).add('default', () => (
  <ListEmptyComponent text="This list is empty." />
))
