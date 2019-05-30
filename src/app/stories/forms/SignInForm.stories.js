import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { SignInForm } from 'components/forms'

export const actions = {
  onSubmit: action('onSubmit'),
  onResetPasswordPress: action('onResetPasswordPress')
}

storiesOf('SignInForm', module).add('default', () => (
  <SignInForm loading={false} {...actions} />
))
