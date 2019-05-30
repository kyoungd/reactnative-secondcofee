import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ProfessionalExperienceForm } from 'components/forms'
import { actions } from './SignInForm.stories'

storiesOf('ProfessionalExperienceForm', module).add('default', () => (
  <ProfessionalExperienceForm {...actions} />
))
