import React from 'react'
import { Container, Content } from 'native-base'
import Toast from 'react-native-easy-toast'
import { Ionicons, Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'
import {
  SafeAreaViewWrapper,
  CustomStatusBar,
  CustomActivityIndicator,
  RegularButton,
  ImageProgressComponent
} from 'components/ui'
import { SectionHeader } from 'components/headers'
import { FilterOptionsListView } from 'components/list-views'
import { defaultStackNavigatorHeaderStyle } from 'styles/common'

const HeroWrapper = styled.View`
  flex-direction: row;
  padding: 16px;
`

const HeroRight = styled.View`
  flex: 1;
  height: 80;
  margin-left: 16;
`

const Title = styled.Text.attrs({
  numberOfLines: 2
})`
  font-family: 'SourceSansProRegular';
  font-size: 17;
  color: #000;
  text-transform: uppercase;
`

const CompanyName = styled.Text.attrs({
  numberOfLines: 2
})`
  font-family: 'SourceSansProRegular';
  font-size: 13;
  color: #346df1;
  margin: 2px 0px 4px;
`

const DescriptionText = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  padding: 16px;
  color: #000;
`

const SalaryText = styled.Text`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #4d001f;
  text-transform: lowercase;
`

const Footer = styled.View`
  height: 70;
  flex-direction: row;
  padding: 0px 16px 0px 0px;
`

const ButtonWrapper = styled.View`
  flex: 2;
  justify-content: center;
  margin: 0px 16px 16px;
`

const ActionIconWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: ${props =>
    props.positionValue === 'left' ? 'flex-start' : 'flex-end'};
  padding: ${props =>
    props.positionValue === 'left' ? '0px 16px 0px' : '0px'};
`

const ActionIconBackground = styled.TouchableOpacity`
  width: 45;
  height: 45;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: ${45 / 2};
`

export default class JobDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Job Details',
    headerBackTitle: null,
    ...defaultStackNavigatorHeaderStyle
  }

  state = {
    loading: false,
    isSaved: false,
    isApplied: false
  }

  toggleSaved() {
    const { isSaved: savedStatus } = this.state
    this.setState({
      isSaved: !savedStatus
    })
  }

  toggleApplied() {
    const { isApplied: appliedStatus } = this.state
    this.setState({
      isApplied: !appliedStatus
    })
  }

  submitjobApplication() {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ isApplied: true, loading: false })
      this.refs.toast.show('Your application has been submitted.', 2000)
    }, 1500)
  }

  render() {
    const { isSaved, isApplied, loading } = this.state

    const { navigation } = this.props
    const resultPayload = navigation.getParam('result', '')
    const result = JSON.parse(resultPayload)
    const {
      photoURL,
      title,
      companyName,
      description,
      filters,
      salary
    } = result

    return (
      <SafeAreaViewWrapper>
        <Container>
          <CustomStatusBar />

          <Content>
            <HeroWrapper>
              <ImageProgressComponent
                photoURL={photoURL}
                resizeMode="cover"
                style={{ width: 80, height: 80 }}
                imageStyle={{ borderRadius: 8 }}
              />

              <HeroRight>
                <Title>{title}</Title>
                <CompanyName>{companyName}</CompanyName>
              </HeroRight>
            </HeroWrapper>

            <SectionHeader>Job Description</SectionHeader>
            <DescriptionText>{description}</DescriptionText>

            {filters.map((item, index) => (
              <React.Fragment key={index}>
                <SectionHeader>{item.title}</SectionHeader>
                <FilterOptionsListView
                  items={item.options}
                  activeItems={item.options}
                  onItemPress={item => null}
                />
              </React.Fragment>
            ))}

            <SectionHeader>
              Salary: {`   `}
              <SalaryText>{salary}</SalaryText>
            </SectionHeader>
          </Content>

          <Footer>
            {!isApplied && (
              <ButtonWrapper>
                <RegularButton
                  text="APPLY FOR THIS JOB"
                  onPress={() => this.submitjobApplication()}
                />
              </ButtonWrapper>
            )}

            {isApplied && (
              <ActionIconWrapper positionValue="left">
                <ActionIconBackground onPress={() => this.toggleApplied()}>
                  <Ionicons name="ios-done-all" size={25} color="#5bbff7" />
                </ActionIconBackground>
              </ActionIconWrapper>
            )}

            <ActionIconWrapper>
              <ActionIconBackground onPress={() => this.toggleSaved()}>
                {!isSaved && (
                  <Feather
                    name="bookmark"
                    size={19}
                    color="#ded3ea"
                    onPress={() => this.toggleSaved()}
                  />
                )}
                {isSaved && (
                  <Ionicons
                    name="md-bookmark"
                    size={20}
                    color="#5bbff7"
                    onPress={() => this.toggleSaved()}
                  />
                )}
              </ActionIconBackground>
            </ActionIconWrapper>
          </Footer>

          <Toast
            ref="toast"
            position="center"
            textStyle={{
              fontFamily: 'SourceSansProRegular',
              fontSize: 14,
              color: '#fff'
            }}
            style={{ backgroundColor: '#346df1' }}
          />
          {loading && <CustomActivityIndicator />}
        </Container>
      </SafeAreaViewWrapper>
    )
  }
}
