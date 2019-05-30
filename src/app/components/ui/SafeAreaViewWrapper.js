import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import { safeAreaViewStyle } from 'styles/common'

export default function SafeAreaViewWrapper({ children }) {
  return <SafeAreaView style={safeAreaViewStyle}>{children}</SafeAreaView>
}

SafeAreaView.propTypes = {
  children: PropTypes.node.isRequired
}
