import React from 'react'
import { Container, Content } from 'native-base'
import styled from 'styled-components/native'
import {
  SafeAreaViewWrapper,
  CustomStatusBar,
  ImageProgressComponent
} from 'components/ui'
import { SectionHeader } from 'components/headers'
import { ProfileDetailListItem } from 'components/list-items'

const PersonalInfoWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const UsernameText = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 20;
  margin-top: 4;
`

const EmailText = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  margin-top: 4;
`

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <Content>
            <SectionHeader>About You</SectionHeader>
            <PersonalInfoWrapper>
              <ImageProgressComponent
                photoURL="https://imgur.com/5WzWMpx.png"
                resizeMode="cover"
                style={{ width: 80, height: 80 }}
                imageStyle={{ borderRadius: 40 }}
              />
              <UsernameText>John Appleseed</UsernameText>
              <EmailText>john@appleseed.com</EmailText>
            </PersonalInfoWrapper>

            <SectionHeader>Professional Experience</SectionHeader>
            <ProfileDetailListItem
              iconName="ios-school"
              title="Qualification"
              content="M.Sc Computer Science"
            />
            <ProfileDetailListItem
              iconName="ios-browsers"
              title="Field/Category"
              content="Computer Science"
            />
            <ProfileDetailListItem
              iconName="ios-clock"
              title="Years of Experience"
              content="3 years"
            />
          </Content>
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
