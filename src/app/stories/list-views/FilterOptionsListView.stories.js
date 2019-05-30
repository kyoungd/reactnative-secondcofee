import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { FilterOptionsListView } from 'components/list-views'
import { SAMPLE_FILTER_OPTIONS } from 'data/sampleData'
import { CenterView } from '../decorators'

const actions = {
  onItemPress: action('onItemPress')
}

storiesOf('FilterOptionListView', module)
  .addDecorator(story => (
    <CenterView verticalAlignment="center">{story()}</CenterView>
  ))
  .add('default', () => (
    <FilterOptionsListView
      items={SAMPLE_FILTER_OPTIONS[0].options}
      activeItems={['Tech', 'Remote']}
      {...actions}
    />
  ))
