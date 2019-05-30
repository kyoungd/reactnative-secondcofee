import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ResetPasswordForm } from 'components/forms'
import { actions } from './SignInForm.stories'

storiesOf('ResetPasswordForm', module).add('default', () => (
  <ResetPasswordForm loading={false} {...actions} />
))
