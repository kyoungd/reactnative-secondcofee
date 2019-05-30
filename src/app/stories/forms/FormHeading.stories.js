import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FormHeading } from 'components/forms'
import { CenterView } from '../decorators'

storiesOf('FormHeading', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <FormHeading
      title="A form heading"
      description="Some text that supports the heading"
    />
  ))
