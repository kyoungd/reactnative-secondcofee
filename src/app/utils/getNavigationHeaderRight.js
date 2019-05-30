import React from 'react'
import { Feather } from '@expo/vector-icons'

const onIconPress = (navigation, routeName) => {
  if (routeName === 'Profile') {
    navigation.navigate('EditProfile')
  }
}

export default function getNavigationHeaderRight(navigation) {
  const { routeName } = navigation.state.routes[navigation.state.index]
  let iconName

  if (routeName === 'Profile') {
    iconName = 'edit-2'
  }

  return (
    <Feather
      name={iconName}
      color="#fff"
      size={20}
      style={{ marginRight: 16 }}
      onPress={() => onIconPress(navigation, routeName)}
    />
  )
}
