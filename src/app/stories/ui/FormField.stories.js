import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { FormField } from 'components/ui'
import { CenterView } from '../decorators'

const actions = {
  onChangeText: action('onChangeText')
}

storiesOf('FormField', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <FormField label="Form Input" value="Form Input Value" {...actions} />
  ))
  .add('secure', () => (
    <FormField
      label="Secure Form Input"
      secure
      value="secure-text"
      {...actions}
    />
  ))
  .add('disabled', () => (
    <FormField
      label="Disabled Form Input"
      disabled
      value="Disabled input"
      {...actions}
    />
  ))
  .add('withBorders', () => (
    <FormField
      label="Regular Form Input"
      regular
      value="Form input value"
      {...actions}
    />
  ))
  .add('withError', () => (
    <FormField
      label="Form Input with error"
      value=""
      error="form input cannot be empty"
      {...actions}
    />
  ))
