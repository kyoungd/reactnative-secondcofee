import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { SignUpForm } from 'components/forms'
import { actions } from './SignInForm.stories'

storiesOf('SignUpForm', module).add('default', () => (
  <SignUpForm loading={false} {...actions} />
))
