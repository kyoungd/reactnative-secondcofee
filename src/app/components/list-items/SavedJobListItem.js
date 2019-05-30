import React from 'react'
import PropTypes from 'prop-types'
import Swipeout from 'react-native-swipeout'
import styled from 'styled-components/native'
import { ImageProgressComponent, ActionButton } from '../ui'
import { Title, CompanyName } from './JobListItem'

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
`

const Right = styled.View`
  flex: 1;
  height: 80;
  margin-left: 16;
`

const Bottom = styled.View`
  flex: 1;
  justify-content: flex-end;
`

const AppliedText = styled(CompanyName)`
  color: #278f37;
`

export default class SavedJobListItem extends React.Component {
  state = {
    isApplied: false
  }

  render() {
    const { photoURL, title, companyName, onPress, onRemovePress } = this.props
    const { isApplied } = this.state

    return (
      <Swipeout
        autoClose
        right={[
          {
            text: 'Remove',
            type: 'delete',
            onPress: () => onRemovePress()
          }
        ]}
        backgroundColor="transparent"
      >
        <Wrapper onPress={() => onPress()}>
          <ImageProgressComponent
            photoURL={photoURL}
            resizeMode="cover"
            style={{ width: 50, height: 50 }}
            imageStyle={{ borderRadius: 8 }}
          />

          <Right>
            <Title>{title}</Title>
            <CompanyName>{companyName}</CompanyName>

            <Bottom>
              {!isApplied && (
                <ActionButton
                  text="Apply"
                  onPress={() => this.setState({ isApplied: true })}
                />
              )}
              {isApplied && <AppliedText>Applied</AppliedText>}
            </Bottom>
          </Right>
        </Wrapper>
      </Swipeout>
    )
  }
}

SavedJobListItem.propTypes = {
  photoURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onRemovePress: PropTypes.func.isRequired
}
