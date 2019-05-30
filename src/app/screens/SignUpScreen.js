import React from 'react'
import { Container } from 'native-base'
import { SafeAreaViewWrapper, CustomStatusBar } from 'components/ui'
import { SignUpForm } from 'components/forms'

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up'
  }

  state = {
    formLoading: false
  }

  onFormSubmit(values) {
    const { navigation } = this.props

    this.setState({ formLoading: true })

    // const { firstName, lastName, email, password } = values

    setTimeout(() => {
      this.setState({ formLoading: false })
      navigation.navigate('Dashboard')
    }, 1500)
  }

  render() {
    const { formLoading } = this.state

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <SignUpForm
            loading={formLoading}
            onSubmit={values => this.onFormSubmit(values)}
          />
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
