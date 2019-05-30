import React, { Component } from 'react'
import { Font, AppLoading, registerRootComponent } from 'expo'
import AppContainer from 'routes'
import StorybookUI from './storybook'

class App extends Component {
  state = {
    fontLoaded: false,
    storybook: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Phosphate: require('./src/assets/fonts/Phosphate.ttf'),
      SourceSansProRegular: require('./src/assets/fonts/SourceSansPro-Regular.ttf'),
      SourceSansProLight: require('./src/assets/fonts/SourceSansPro-Light.ttf'),
      SourceSansProBold: require('./src/assets/fonts/SourceSansPro-Bold.ttf')
    })

    this.setState({
      fontLoaded: true
    })
  }

  render() {
    const { fontLoaded, storybook } = this.state

    if (fontLoaded) {
      if (!storybook) {
        return <AppContainer />
      } else {
        return <StorybookUI />
      }
    } else {
      return <AppLoading />
    }
  }
}

registerRootComponent(App)
