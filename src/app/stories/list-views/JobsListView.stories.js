import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { JobsListView } from 'components/list-views'
import { SAMPLE_JOB_LISTINGS } from 'data/sampleData'

const actions = {
  onItemPress: action('onItemPress')
}

storiesOf('JobsListView', module)
  .add('default', () => (
    <JobsListView loading={false} items={SAMPLE_JOB_LISTINGS} {...actions} />
  ))
  .add('loading', () => (
    <JobsListView loading items={SAMPLE_JOB_LISTINGS} {...actions} />
  ))
  .add('empty', () => <JobsListView loading={false} items={[]} {...actions} />)
