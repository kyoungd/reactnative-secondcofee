import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ProfileDetailListItem } from 'components/list-items'
import { CenterView } from '../decorators'

storiesOf('ProfileDetailListItem', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <ProfileDetailListItem
      iconName="ios-locate"
      title="Shipping Address"
      content="717 Leatherwood Road Hoffman Estates, IL 60169"
    />
  ))
