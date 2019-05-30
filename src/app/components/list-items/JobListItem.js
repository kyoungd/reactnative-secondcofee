import React from 'react'
import PropTypes from 'prop-types'
import { Ionicons, Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  padding: 8px;
  border-radius: 8;
  margin: 16px 16px 8px;
  background-color: #fff;
  border-width: 1;
  border-color: #dee3ea;
`

const Left = styled.TouchableOpacity`
  flex: 1;
  margin-right: 8;
`

const IconWrapper = styled.View`
  width: 30;
  align-items: center;
`

export const Title = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: 'SourceSansProRegular';
  font-size: 17;
  color: #000;
  text-transform: uppercase;
`

export const CompanyName = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #346df1;
  margin: 2px 0px 4px;
`

const Bottom = styled.View`
  height: 40;
  flex-direction: row;
`

const BottomItemWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

const BottomItemIcon = styled(Ionicons).attrs({
  size: 18,
  color: '#a5a5a5'
})``

export const BottomItemText = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: 'SourceSansProRegular';
  font-size: 15;
  color: #a9a9a9;
  margin: 0px 4px 4px;
`

export default class JobListItem extends React.Component {
  state = {
    isSaved: false
  }

  toggleSaved() {
    const { isSaved: savedStatus } = this.state
    this.setState({
      isSaved: !savedStatus
    })
  }

  render() {
    const { title, companyName, postedAt, experience, onPress } = this.props
    const { isSaved } = this.state

    return (
      <Wrapper>
        <Left onPress={() => onPress()}>
          <Title>{title}</Title>
          <CompanyName>{companyName}</CompanyName>

          <Bottom>
            <BottomItemWrapper>
              <BottomItemIcon name="ios-time" />
              <BottomItemText>{postedAt}</BottomItemText>
            </BottomItemWrapper>

            <BottomItemWrapper>
              <BottomItemIcon name="ios-flash" />
              <BottomItemText>Experience: {experience}</BottomItemText>
            </BottomItemWrapper>
          </Bottom>
        </Left>

        <IconWrapper>
          {!isSaved && (
            <Feather
              name="bookmark"
              size={26}
              color="#a5a5a5"
              onPress={() => this.toggleSaved()}
            />
          )}
          {isSaved && (
            <Ionicons
              name="md-bookmark"
              size={30}
              color="#5bbff7"
              onPress={() => this.toggleSaved()}
            />
          )}
        </IconWrapper>
      </Wrapper>
    )
  }
}

JobListItem.propTypes = {
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}
