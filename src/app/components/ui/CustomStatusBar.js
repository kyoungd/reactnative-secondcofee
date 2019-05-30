import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar } from 'react-native'

export default function CustomStatusBar({ theme }) {
  return <StatusBar barStyle={`${theme}-content`} />
}

CustomStatusBar.propTypes = {
  theme: PropTypes.string
}
CustomStatusBar.defaultProps = {
  theme: 'light'
}
