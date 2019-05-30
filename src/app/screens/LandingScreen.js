import React from 'react'
import { Container } from 'native-base'
import styled from 'styled-components/native'
import { CustomStatusBar, ImageOverlayComponent } from 'components/ui'

const PageBackground = styled.ImageBackground`
  flex: 1;
  width: null;
  height: null;
`

export const Heading = styled.Text`
  font-family: 'Phosphate';
  font-size: 25;
  color: #fff;
  text-align: center;
`

export const DescriptionText = styled(Heading)`
  font-family: 'SourceSansProRegular';
  font-size: 17;
  margin: 4px 0px 16px;
  color: #fff;
`

const Footer = styled.View`
  flex-direction: row;
  height: 55;
`

const AuthButtonWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg || '#fff'};
`

const AuthButtonText = styled.Text`
  font-family: 'SourceSansProBold';
  font-size: 15;
  color: ${props => props.color || '#000'};
`

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <CustomStatusBar />

        <PageBackground source={require('assets/images/landing_bg.jpeg')}>
          <ImageOverlayComponent>
            <Heading>Welcome to 2nd Coffee</Heading>
            <DescriptionText>
              We are Uber to the START-UP business. Become an entrepreneur
              the easy way. Join a Start-up, and work only the hours you want for OWNERSHIP.
            </DescriptionText>
          </ImageOverlayComponent>
        </PageBackground>

        <Footer>
          <AuthButtonWrapper onPress={() => navigation.navigate('SignUp')}>
            <AuthButtonText>CREATE ACCOUNT</AuthButtonText>
          </AuthButtonWrapper>

          <AuthButtonWrapper
            bg="#0956fe"
            onPress={() => navigation.navigate('SignIn')}
          >
            <AuthButtonText color="#fff">SIGN IN</AuthButtonText>
          </AuthButtonWrapper>
        </Footer>
      </Container>
    )
  }
}
