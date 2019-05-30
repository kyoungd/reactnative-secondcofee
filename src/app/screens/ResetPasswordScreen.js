import React from 'react'
import { Container } from 'native-base'
import { SafeAreaViewWrapper, CustomStatusBar } from 'components/ui'
import { ResetPasswordForm } from 'components/forms'

export default class ResetPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'Reset Password'
  }

  state = {
    formLoading: false
  }

  onFormSubmit(values) {
    const { navigation } = this.props

    this.setState({ formLoading: true })

    // const { email } = values

    setTimeout(() => {
      this.setState({ formLoading: false })
      navigation.goBack()
    }, 1500)
  }

  render() {
    const { formLoading } = this.state

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <ResetPasswordForm
            loading={formLoading}
            onSubmit={values => this.onFormSubmit(values)}
          />
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
