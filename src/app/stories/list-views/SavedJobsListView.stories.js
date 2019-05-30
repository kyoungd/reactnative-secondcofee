import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { SavedJobsListView } from 'components/list-views'
import { SAMPLE_JOB_LISTINGS } from 'data/sampleData'

const actions = {
  onItemPress: action('onItemPress'),
  onItemRemovePress: action('onItemRemovePress')
}

storiesOf('SavedJobsListView', module)
  .add('default', () => (
    <SavedJobsListView
      loading={false}
      items={SAMPLE_JOB_LISTINGS}
      {...actions}
    />
  ))
  .add('loading', () => (
    <SavedJobsListView loading items={SAMPLE_JOB_LISTINGS} {...actions} />
  ))
  .add('empty', () => (
    <SavedJobsListView loading={false} items={[]} {...actions} />
  ))
