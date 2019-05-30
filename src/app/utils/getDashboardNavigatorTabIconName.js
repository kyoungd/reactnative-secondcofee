import React from 'react'
import { Feather } from '@expo/vector-icons'

export default function getDashboardNavigatorTabIconName(
  navigation,
  tintColor
) {
  const { routeName } = navigation.state
  let iconName

  if (routeName === 'Jobs') {
    iconName = 'briefcase'
  } else if (routeName === 'Search') {
    iconName = 'search'
  } else if (routeName === 'Saved') {
    iconName = 'bookmark'
  } else if (routeName === 'Settings') {
    iconName = 'settings'
  } else if (routeName === 'Profile') {
    iconName = 'user'
  }

  return <Feather name={iconName} color={tintColor} size={20} />
}
