import React from 'react'
import { Container } from 'native-base'
import StepIndicator from 'react-native-step-indicator'
import styled from 'styled-components/native'
import {
  SafeAreaViewWrapper,
  CustomStatusBar,
  CustomActivityIndicator,
  RegularButton
} from 'components/ui'
import {
  PersonalInformationForm,
  ProfessionalExperienceForm,
  FormHeading
} from 'components/forms'
import {
  defaultStackNavigatorHeaderStyle,
  stepIndicatorCustomStyle
} from 'styles/common'

const IndicatorWrapper = styled.View`
  padding: 16px;
`

const FinalStepWrapper = styled.View`
  flex: 1;
  padding: 16px;
`

const Hero = styled.Image.attrs({
  source: require('assets/images/profile_hero.jpg'),
  resizeMode: 'cover'
})`
  width: 100%;
  height: 300;
  margin: 0px 0px 16px;
`

export default class EditProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Profile',
    headerBackTitle: null,
    ...defaultStackNavigatorHeaderStyle
  }

  state = {
    loading: false,
    step: 0
  }

  updateProfile(values) {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ step: 2, loading: false })
    }, 1500)
  }

  render() {
    const { loading, step } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <IndicatorWrapper>
            <StepIndicator
              stepCount={3}
              currentPosition={step}
              customStyles={stepIndicatorCustomStyle}
            />
          </IndicatorWrapper>

          {step === 0 && (
            <PersonalInformationForm
              onSubmit={values => this.setState({ step: 1 })}
            />
          )}

          {step === 1 && (
            <ProfessionalExperienceForm
              onSubmit={values => this.updateProfile(values)}
            />
          )}

          {step === 2 && (
            <FinalStepWrapper>
              <Hero />
              <FormHeading
                title="You're all set"
                description="Your profile details have been saved"
              />

              <RegularButton text="Done" onPress={() => navigation.goBack()} />
            </FinalStepWrapper>
          )}

          {loading && <CustomActivityIndicator />}
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
