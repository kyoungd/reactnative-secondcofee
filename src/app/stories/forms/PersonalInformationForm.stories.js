import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { PersonalInformationForm } from 'components/forms'
import { actions } from './SignInForm.stories'

storiesOf('PersonalInformationForm', module).add('default', () => (
  <PersonalInformationForm {...actions} />
))
