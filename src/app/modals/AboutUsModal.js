import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-native'
import styled from 'styled-components/native'
import { RegularButton } from 'components/ui'

const Wrapper = styled.View`
  flex: 1;
`

const Hero = styled.Image.attrs({
  source: require('assets/images/profile_hero.jpg'),
  resizeMode: 'cover'
})`
  width: 100%;
  height: 300;
  margin: 0px 0px 16px;
`

const Title = styled.Text`
  font-family: 'SourceSansProBold';
  font-size: 25;
  color: #000;
  margin: 0px 16px 8px;
`

const AboutText = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 17;
  color: #000;
  margin: 0px 16px 8px;
`

const ButtonWrapper = styled.View`
  margin: 0px 16px;
`

export default function AboutUsModal({ onDismiss }) {
  return (
    <Modal visible animationType="slide" onRequestClose={() => null}>
      <Wrapper>
        <Hero />

        <Title>Job Listing</Title>
        <AboutText>
          With verified, up-to-date job listings, we create a premium experience
          for job seekers, employers, and data seekers alike.
        </AboutText>

        <ButtonWrapper>
          <RegularButton text="CLOSE" onPress={() => onDismiss()} />
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  )
}

AboutUsModal.propTypes = {
  onDismiss: PropTypes.func.isRequired
}
