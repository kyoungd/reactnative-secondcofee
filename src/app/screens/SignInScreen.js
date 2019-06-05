import React from 'react'
import firebase from 'firebase'
import { Container, Text } from 'native-base'
import { SafeAreaViewWrapper, CustomStatusBar } from 'components/ui'
import { SignInForm } from 'components/forms'

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  }

  state = {
    formLoading: false,
    loginFailed: false,
  }

  onLoginSuccess() {
    const { navigation } = this.props
    this.setState({ formLoading: false, loginFailed: false })
    navigation.navigate('Dashboard')
  }

  onLoginFail() {
    this.setState({ formLoading: false, loginFailed: true })
  }

  onFormSubmit(values) {
    // const { navigation } = this.props

    this.setState({ formLoading: true })
    const { email, password } = values

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onLoginFail.bind(this))
    // .catch(() => {
      // firebase.auth().createUserWithEmailAndPassword(email, password)
      // .then(this.onLoginSuccess.bind(this))
      // .catch(this.onLoginFail.bind(this));
    // })

    // setTimeout(() => {
    //   this.setState({ formLoading: false })
    //   navigation.navigate('Dashboard')
    // }, 1500)
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
          <Text>{this.state.loginFailed ? 'LOGIN FAILED' : ''}</Text>
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
