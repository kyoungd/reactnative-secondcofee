import React from 'react'
import { Container } from 'native-base'
import { SafeAreaViewWrapper, CustomStatusBar } from 'components/ui'
import { SignInForm } from 'components/forms'

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign in'
  }

  state = {
    formLoading: false
  }

  onFormSubmit(values) {
    const { navigation } = this.props

    this.setState({ formLoading: true })

    // const { email, password } = values

    setTimeout(() => {
      this.setState({ formLoading: false })
      navigation.navigate('Dashboard')
    }, 1500)
  }

  render() {
    const { navigation } = this.props
    const { formLoading } = this.state

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <SignInForm
            loading={formLoading}
            onSubmit={values => this.onFormSubmit(values)}
            onResetPasswordPress={() => navigation.navigate('ResetPassword')}
          />
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
