import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { JobListItem } from 'components/list-items'
import { CenterView } from '../decorators'

export const defaultListItem = {
  photoURL: 'https://imgur.com/5WzWMpx.png',
  title: 'UI/UX Developer',
  companyName: 'Universal Studios',
  postedAt: '13 Mar 2019',
  experience: '2-3 years'
}

const actions = {
  onPress: action('onPress')
}

storiesOf('JobListItem', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <JobListItem {...defaultListItem} {...actions} />)
