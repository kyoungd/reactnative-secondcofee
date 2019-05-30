import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions/dist/preview'
import { FilterOptionListItem } from 'components/list-items'
import { CenterView } from '../decorators'

const defaultListItem = {
  label: 'Filter'
}

const actions = {
  onPress: action('onPress')
}

storiesOf('FilterOptionListItem', module)
  .addDecorator(story => (
    <CenterView horizontalAlignment="center">{story()}</CenterView>
  ))
  .add('active', () => (
    <FilterOptionListItem active {...defaultListItem} {...actions} />
  ))
  .add('inactive', () => (
    <FilterOptionListItem active={false} {...defaultListItem} {...actions} />
  ))
