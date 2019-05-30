import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { SavedJobListItem } from 'components/list-items'
import { CenterView } from '../decorators'
import { defaultListItem } from './JobListItem.stories'

const actions = {
  onPress: action('onPress'),
  onRemovePress: action('onRemovePress')
}

storiesOf('SavedJobListItem', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <SavedJobListItem {...defaultListItem} {...actions} />)
