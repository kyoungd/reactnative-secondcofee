import React from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const HeaderBackImageWrapper = styled.View`
  width: 35;
  justify-content: center;
  align-items: center;
  margin-left: ${Platform.OS === 'ios' ? 8 : 0};
`

export const safeAreaViewStyle = {
  flex: 1
}

const headerTitleStyle = {
  fontFamily: 'SourceSansProRegular',
  fontSize: 20,
  color: '#fff'
}
export const defaultStackNavigatorHeaderStyle = {
  headerStyle: {
    backgroundColor: '#346df1',
    borderBottomColor: 'transparent'
  },
  headerTitleStyle,
  headerTintColor: '#fff',
  headerBackTitleStyle: headerTitleStyle,
  headerBackImage: ({ tintColor }) => (
    <HeaderBackImageWrapper>
      <Ionicons name="ios-arrow-round-back" color={tintColor} size={30} />
    </HeaderBackImageWrapper>
  )
}

export const tabHeadingStyle = {
  backgroundColor: '#fff'
}

export const tabBarOptions = {
  activeTintColor: '#000',
  inactiveTintColor: 'grey',
  labelStyle: {
    fontFamily: 'SourceSansProRegular'
  },
  style: {
    backgroundColor: '#fff',
    borderTopColor: '#dee3ea'
  }
}

export const stepIndicatorCustomStyle = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#346df1',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#346df1',
  stepStrokeUnFinishedColor: '#dee3ea',
  separatorFinishedColor: '#346df1',
  separatorUnFinishedColor: '#dee3ea',
  stepIndicatorFinishedColor: '#346df1',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff'
}
